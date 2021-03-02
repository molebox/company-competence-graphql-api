import { arg, extendType, inputObjectType, intArg, list, nonNull, objectType, stringArg } from "nexus";

export const IndustryInputType = inputObjectType({
    name: 'IndustryInputType',
    definition(t) {
        t.int('industryId')
    }
})

export const Industry = objectType({
    name: 'Industry',
    definition(t) {
        t.int('id')
        t.string('name')
        t.list.field('companies', {
            type: 'Company',
            resolve: (parent, _, ctx) => {
                return ctx.db.industry.findUnique({
                    where: {id: parent.id || undefined}
                }).companies()
            }
        })
    }
})

export const IndustryQuery = extendType({
    type: 'Query',
    definition(t) {
        // get all industrys
        t.list.field('industries', {
            type: 'Industry',
            resolve(_root, _args, ctx) {
                return ctx.db.industry.findMany()
            }
        })
        // get industry by id
        t.field('industry', {
            type: 'Industry',
            args: {
                id: nonNull(intArg())
            },
            resolve(_root, args, ctx) {
                return ctx.db.industry.findUnique({
                    where: {id: args.id}
                })
            }
        })
    }
})

export const IndustryMutation = extendType({
    type: 'Mutation',
    definition(t) {
        // create a new industry
        t.field('createIndustry', {
            type: 'Industry',
            args: {
                name: nonNull(stringArg()),
                companyId: intArg(),
                companies: arg({
                    type: list('CompanyInputType')
                })
            },
            resolve(_root, args, ctx) {
                return ctx.db.industry.create({
                    data: {
                        name: args.name,
                        companies: {
                            connect: [
                                {id: args.companyId || undefined}
                            ]
                        }
                    }
                })
            }
        })
        // update a industry by id
        t.field('updateIndustry', {
            type: 'Industry',
            args: {
                id: nonNull(intArg()),
                name: stringArg(),
                companyId: intArg(),
                companies: arg({
                    type: list('CompanyInputType')
                })
            },
            resolve(_root, args, ctx) {
                return ctx.db.industry.update({
                    where: {id: args.id},
                    data: {
                        name: args.name,
                        companies: {
                            connect: [
                                {id: args.companyId || undefined}
                            ]
                        }
                    }
                })
            }
        })
        // delete a industry by id
        t.field('deleteIndustry', {
            type: 'Industry',
            args: {
                id: nonNull(intArg()),
            },
            resolve(_root, args, ctx) {
                return ctx.db.industry.delete({
                    where: {id: args.id}
                })
            }
        })
    }
})