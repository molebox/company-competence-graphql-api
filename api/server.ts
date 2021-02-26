import { ApolloServer } from "apollo-server";
import {schema} from './schema';
import {context} from './context';

// Instantiate your GraphQL server
// The context passed to Apollo Server can either be a function or a plain JavaScript object.
// We would need to use a function when we need to perform some calculation or get some data from an external source based on the request and then pass that derived data on to the context for all our resolvers to use.
export const server = new ApolloServer({schema, context});