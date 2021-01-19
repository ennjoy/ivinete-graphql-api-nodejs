import { AuthMutation } from './auth.js'
import { UserQuery } from './user.js'
import { PageQuery, PageMutation } from './page.js'
import { WallQuery, WallMutation } from './wall.js'
import { AudioQuery } from './audio.js'
import { PhotoQuery } from './photo.js'

export default {
  Query: {
    ...UserQuery,
    ...PageQuery,
    ...WallQuery,
    ...AudioQuery,
    ...PhotoQuery
  },
  Mutation: {
    ...AuthMutation,
    ...PageMutation,
    ...WallMutation
  }
}
