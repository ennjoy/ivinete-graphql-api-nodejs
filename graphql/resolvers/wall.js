import Users from '../../models/users.js'
import Wall from '../../models/wall.js'

const wall = async ({ owner_id }, req) => {
    if (!req.isLoggedIn) {
        throw new Error('Unauthenticated!');
    }
    try {
        const walls = await Wall.find({ owner_id: owner_id || req.id })
        return walls.map(wall => {
            return {
                ...wall._doc, id: wall.id
            }
        })
    } catch (error) {
        throw error
    }
}

const wallPost = async (args, req) => {
    if (!req.isLoggedIn) {
        throw new Error('Unauthenticated!');
    }
    const wall = new Wall({
        from_id: req.id,
        owner_id: args.input.owner_id,
        text: args.input.text
    })
    
    let createdWall

    try {
        const result = await wall.save()
        
        createdWall = {
            ...result._doc,
            _id: result._doc._id.toString()
        }

        // const user = User.findById('5ff552937f02e52c90060e98')

        // if (!user) {
        //     throw new Error('User not found.')
        // }

        // user.createdWall.push(wall)
        // await user.save()
        
        return createdWall
    } catch (error) {
        throw error
    }
}

export default {
    wall,
    wallPost
}