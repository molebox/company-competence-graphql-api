import { arg, extendType, inputObjectType, intArg, nonNull, objectType, stringArg } from "nexus";
import { RoleMutation } from './role';

export const TradeInputType = inputObjectType({
    name: 'TradeInputType',
    definition(t) {
        t.string('name')
        t.field('company', {type: 'CompanyInputType'})
    }
})

export const Trade = objectType({
    name: 'Trade',
    definition(t) {
        t.nonNull.int('id')
        t.string('name')
        t.field('company', { // nullable by default
            type: 'Company',
            resolve: (parent, _, ctx) => {
                return ctx.db.trade.findUnique({
                    where: {id: parent.id || undefined}
                }).company()
            }
        })
    }
})

export const TradeQuery = extendType({
    type: 'Query',
    definition(t) {
        // get all trades
        t.list.field('trades', {
            type: 'Trade',
            resolve(_root, _args, ctx) {
                return ctx.db.trade.findMany()
            }
        })
        // get trade by id
        t.field('trade', {
            type: 'Trade',
            args: {
                id: nonNull(intArg())
            },
            resolve(_root, args, ctx) {
                return ctx.db.trade.findUnique({
                    where: {id: args.id}
                })
            }
        })
    }
})

export const TradeMutation = extendType({
    type: 'Mutation',
    definition(t) {
        // create a new trade
        t.field('createTrade', {
            type: 'Trade',
            args: {
                name: nonNull(stringArg()),
                company: arg({
                    type: 'CompanyInputType'
                })
            },
            resolve(_root, args, ctx) {
                const newCompany = {
                    name: args.company?.name,
                    email: args.company?.email,
                    bio: args.company?.bio,
                    website: args.company?.website,
                    contactPerson: args.company?.contactPerson
                }
                return ctx.db.trade.create({
                    data: {
                        name: args.name,
                        company: {
                            create: newCompany
                        }
                    }
                })
            }
        })
        // update a trade by id
        t.field('updateTrade', {
            type: 'Trade',
            args: {
                id: nonNull(intArg()),
                name: nonNull(stringArg()),
            },
            resolve(_root, args, ctx) {
                return ctx.db.trade.update({
                    where: {id: args.id},
                    data: {
                        name: args.name,
                    }
                })
            }
        })
        // delete a trade by id
        t.field('deleteTrade', {
            type: 'Trade',
            args: {
                id: nonNull(intArg()),
            },
            resolve(_root, args, ctx) {
                return ctx.db.trade.delete({
                    where: {id: args.id}
                })
            }
        })
    }
})