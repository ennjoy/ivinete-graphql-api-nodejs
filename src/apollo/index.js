import { ApolloServer, makeExecutableSchema, AuthenticationError } from 'apollo-server'

// Graphql
import typeDefs from '../graphql/typeDefs/index.js'
import resolvers from '../graphql/resolvers/index.js'

// Middleware
import isLoggedIn from '../middleware/isLoggedIn.js'

// Models
import User from '../models/user.js'
import Page from '../models/page.js'
import Wall from '../models/wall.js'
import Audio from '../models/audio.js'
import Photo from '../models/photo.js'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    loggedIn: isLoggedIn(req.headers.authorization),
    models: {
      User,
      Page,
      Wall,
      Audio,
      Photo
    }
  })
})

export default server