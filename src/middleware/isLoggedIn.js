import { AuthenticationError } from 'apollo-server'
import jwt from 'jsonwebtoken'

const isLoggedIn = (authorization) => {
  if (authorization) {
    const token = authorization.replace('Bearer ', '')

    let loggedIn

    try {
      loggedIn = jwt.verify(token, 'somesupersecretkey')
    } catch (error) {
      throw new AuthenticationError('you must be logged in')
    }

    return loggedIn
  }
}

export default isLoggedIn