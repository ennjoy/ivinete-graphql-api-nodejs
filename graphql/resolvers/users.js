import Users from '../../models/users.js'

const users = async ({ id }, req) => {
    if (!req.isLoggedIn) {
        throw new Error('Unauthenticated!');
    }
    try {
        const users = await Users.findById(id || req.id)
        return {
            ...users._doc, id: users.id
        }
    } catch (error) {
        throw error
    }
}

export default {
    users
}