// aqibdotjs: Username, Password: f05dqNrsdp4XvrhH
// mongodb+srv://aqibdotjs:f05dqNrsdp4XvrhH@cluster0.lvovzoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://aqibdotjs:<password>@cluster0.lvovzoo.mongodb.net/

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectMongooseClient } from './mongoodb.js';
import typeDefs from './typeDefs.js';
import { resolvers } from './resolvers.js';
connectMongooseClient();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`); 