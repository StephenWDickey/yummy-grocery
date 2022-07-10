const stripe = require('stripe')("sk_test_51LJ0bKHO9kGri03OxeBhLOJCiSNJtr107yHgqQZuL0ZRGC5Khq1BIGmt3vit3Jq8JZAM6FNoSocarOWNU1U6uYAq008hjf0Tpd");
const cors = require('cors');


const path = require('path');


const express = require('express');


// import ApolloServer
const { ApolloServer } = require('apollo-server-express');


// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');


const db = require('./config/connection');



// import auth middleware for JWT
// pass it in as context for new server instance
const { authMiddleware } = require('./utils/auth');


const PORT = process.env.PORT || 3001;


const app = express();


// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // pass in context for HTTP header
  // we use our middleware to authenticate 
  // the token before our resolver gets it
  // authMiddleware seems to break graphQL server
  context: authMiddleware
});

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post('/checkout', (req, res) => {
  console.log(req.body);
})



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({app});

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};


// Call the async function to start the server
startApolloServer(typeDefs, resolvers);


