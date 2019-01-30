const express = require('express'),
	  graphqlHttp = require('express-graphql'),
	  { buildSchema } = require('graphql'),
	  schema = require('./api/schema');

const app = express()

app.use('/', graphqlHttp({
	schema,
	graphiql: true
}))

app.listen(4000, () => console.log('Listening on port 4000'))


// query{
//     getUsers{
//       name
//       email
//       password
//     }
//   }
  
  
//   mutation{
//     createUser(input:{
//       name: "Lucas",
//       email: "lucasblaas@gmail.com",
//       password: "ljlkJLK$AW3"
//     }){
//       id
//     }
//   }