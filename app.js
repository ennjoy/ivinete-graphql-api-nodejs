import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'

import graphQlSchema from './graphql/schema/index.js'
import graphQlResolvers from './graphql/resolvers/index.js'
import isLoggedIn from './middleware/isLoggedIn.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(isLoggedIn)

app.use('/graphql', graphqlHTTP({
	schema: graphQlSchema,
	rootValue: graphQlResolvers,
	graphiql: true
}))

mongoose.connect(process.env.MONGO_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log('Connected to DB!')
})

app.listen(3000)