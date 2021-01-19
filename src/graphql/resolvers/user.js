const userById = async (_, { id }, context) => {

    if (!context.loggedIn) return null

    try {
        const user = await context.models.User.findById(id || context.loggedIn.id)
        return {
            ...user._doc, id: user.id
        }
    } catch (error) {
        throw error
    }
}

const UserQuery = {
    userById
}

export {
    UserQuery
}