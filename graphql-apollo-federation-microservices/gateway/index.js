const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

// Apollo Gateway setup
const gateway = new ApolloGateway({
  serviceList: [
    { name: 'user', url: 'http://localhost:4001' },
    { name: 'post', url: 'http://localhost:4002' },
  ],
});

// Apollo server setup
const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

// Start server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Gateway running at ${url}`);
});