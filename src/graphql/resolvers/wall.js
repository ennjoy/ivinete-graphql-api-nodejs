const wall = async (_, { owner_id }, context) => {

    if (!context.loggedIn) return null

    try {
        const walls = await context.models.Wall.find({ owner_id: owner_id || context.loggedIn.id })
        return walls.map(wall => {
            return {
                ...wall._doc, id: wall.id
            }
        })
    } catch (error) {
        throw error
    }
}

const wallPost = async (_, args, context) => {

    if (!context.loggedIn) return null

    const wall = new context.models.Wall({
        from_id: context.loggedIn.id,
        owner_id: args.input.owner_id || context.loggedIn.id,
        text: args.input.text
    })
    
    let createdWall

    try {
        const result = await wall.save()
        
        createdWall = {
            ...result._doc,
            id: result.id
        }
        
        return createdWall
    } catch (error) {
        throw error
    }
}

const WallQuery = {
    wall
}

const WallMutation = {
    wallPost
}

export {
    WallQuery,
    WallMutation
}