/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./api/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Company: { // root type
    bio?: string | null; // String
    contactPerson?: string | null; // String
    email?: string | null; // String
    id: number; // Int!
    name?: string | null; // String
    website?: string | null; // String
  }
  Industry: { // root type
    id?: number | null; // Int
    name?: string | null; // String
  }
  Mutation: {};
  Query: {};
  Role: { // root type
    id: number; // Int!
    name?: string | null; // String
  }
  Skill: { // root type
    id: number; // Int!
    name?: string | null; // String
  }
  Trade: { // root type
    id: number; // Int!
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Company: { // field return type
    bio: string | null; // String
    contactPerson: string | null; // String
    email: string | null; // String
    id: number; // Int!
    industry: NexusGenRootTypes['Industry'] | null; // Industry
    name: string | null; // String
    roles: NexusGenRootTypes['Role'][]; // [Role!]!
    trades: NexusGenRootTypes['Trade'][]; // [Trade!]!
    website: string | null; // String
  }
  Industry: { // field return type
    companies: Array<NexusGenRootTypes['Company'] | null> | null; // [Company]
    id: number | null; // Int
    name: string | null; // String
  }
  Mutation: { // field return type
    createCompany: NexusGenRootTypes['Company']; // Company!
    createIndustry: NexusGenRootTypes['Industry'] | null; // Industry
    createRole: NexusGenRootTypes['Role'] | null; // Role
    createSkill: NexusGenRootTypes['Skill'] | null; // Skill
    createTrade: NexusGenRootTypes['Trade'] | null; // Trade
    deleteCompany: NexusGenRootTypes['Company'] | null; // Company
    deleteIndustry: NexusGenRootTypes['Industry'] | null; // Industry
    deleteRole: NexusGenRootTypes['Role'] | null; // Role
    deleteSkill: NexusGenRootTypes['Skill'] | null; // Skill
    deleteTrade: NexusGenRootTypes['Trade'] | null; // Trade
    updateCompany: NexusGenRootTypes['Company'] | null; // Company
    updateIndustry: NexusGenRootTypes['Industry'] | null; // Industry
    updateRole: NexusGenRootTypes['Role'] | null; // Role
    updateSkill: NexusGenRootTypes['Skill'] | null; // Skill
    updateTrade: NexusGenRootTypes['Trade'] | null; // Trade
  }
  Query: { // field return type
    companies: Array<NexusGenRootTypes['Company'] | null> | null; // [Company]
    company: NexusGenRootTypes['Company'] | null; // Company
    industries: Array<NexusGenRootTypes['Industry'] | null> | null; // [Industry]
    industry: NexusGenRootTypes['Industry'] | null; // Industry
    roles: Array<NexusGenRootTypes['Role'] | null> | null; // [Role]
    skill: NexusGenRootTypes['Skill'] | null; // Skill
    skills: Array<NexusGenRootTypes['Skill'] | null> | null; // [Skill]
    trade: NexusGenRootTypes['Trade'] | null; // Trade
    trades: Array<NexusGenRootTypes['Trade'] | null> | null; // [Trade]
  }
  Role: { // field return type
    company: NexusGenRootTypes['Company'] | null; // Company
    id: number; // Int!
    name: string | null; // String
  }
  Skill: { // field return type
    id: number; // Int!
    name: string | null; // String
    role: NexusGenRootTypes['Role'] | null; // Role
  }
  Trade: { // field return type
    company: NexusGenRootTypes['Company'] | null; // Company
    id: number; // Int!
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Company: { // field return type name
    bio: 'String'
    contactPerson: 'String'
    email: 'String'
    id: 'Int'
    industry: 'Industry'
    name: 'String'
    roles: 'Role'
    trades: 'Trade'
    website: 'String'
  }
  Industry: { // field return type name
    companies: 'Company'
    id: 'Int'
    name: 'String'
  }
  Mutation: { // field return type name
    createCompany: 'Company'
    createIndustry: 'Industry'
    createRole: 'Role'
    createSkill: 'Skill'
    createTrade: 'Trade'
    deleteCompany: 'Company'
    deleteIndustry: 'Industry'
    deleteRole: 'Role'
    deleteSkill: 'Skill'
    deleteTrade: 'Trade'
    updateCompany: 'Company'
    updateIndustry: 'Industry'
    updateRole: 'Role'
    updateSkill: 'Skill'
    updateTrade: 'Trade'
  }
  Query: { // field return type name
    companies: 'Company'
    company: 'Company'
    industries: 'Industry'
    industry: 'Industry'
    roles: 'Role'
    skill: 'Skill'
    skills: 'Skill'
    trade: 'Trade'
    trades: 'Trade'
  }
  Role: { // field return type name
    company: 'Company'
    id: 'Int'
    name: 'String'
  }
  Skill: { // field return type name
    id: 'Int'
    name: 'String'
    role: 'Role'
  }
  Trade: { // field return type name
    company: 'Company'
    id: 'Int'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCompany: { // args
      bio: string; // String!
      contactPerson: string; // String!
      email: string; // String!
      name: string; // String!
      website: string; // String!
    }
    createIndustry: { // args
      name: string; // String!
    }
    createRole: { // args
      name: string; // String!
    }
    createSkill: { // args
      name: string; // String!
    }
    createTrade: { // args
      name: string; // String!
    }
    deleteCompany: { // args
      id: number; // Int!
    }
    deleteIndustry: { // args
      id: number; // Int!
    }
    deleteRole: { // args
      id: number; // Int!
    }
    deleteSkill: { // args
      id: number; // Int!
    }
    deleteTrade: { // args
      id: number; // Int!
    }
    updateCompany: { // args
      bio?: string | null; // String
      contactPerson?: string | null; // String
      email?: string | null; // String
      id: number; // Int!
      name?: string | null; // String
      website?: string | null; // String
    }
    updateIndustry: { // args
      id: number; // Int!
      name: string; // String!
    }
    updateRole: { // args
      id: number; // Int!
      name: string; // String!
    }
    updateSkill: { // args
      id: number; // Int!
      name: string; // String!
    }
    updateTrade: { // args
      id: number; // Int!
      name: string; // String!
    }
  }
  Query: {
    company: { // args
      id: number; // Int!
    }
    industry: { // args
      id: number; // Int!
    }
    skill: { // args
      id: number; // Int!
    }
    trade: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}