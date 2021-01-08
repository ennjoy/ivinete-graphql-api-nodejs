import jwt from 'jsonwebtoken'

const isLoggedIn = (req, res, next) => {
    const authHeader = req.get('Authorization')

    if (!authHeader) {
        req.isLoggedIn = false
        return next()
    }

    const token = authHeader.split(' ')[1]

    if (!token || token === null) {
        req.isLoggedIn = false
        return next()
    }

    let decodedToken

    try {
        decodedToken = jwt.verify(token, 'somesupersecretkey')
    } catch (error) {
        req.isLoggedIn = false
        return next()
    }

    if (!decodedToken) {
        req.isLoggedIn = false
        return next()
    }

    req.isLoggedIn = true
    req.id = decodedToken.id
    next()
}

export default isLoggedIn