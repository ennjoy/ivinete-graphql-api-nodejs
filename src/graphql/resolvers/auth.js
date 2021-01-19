import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const login = async (_, args, context) => {

    const user = await context.models.User.findOne({ phone: args.input.phone })

    if (!user) {
        throw new Error('User does not exist!')
    }

    const isEqual = await bcrypt.compare(args.input.password, user.password)
    
    if (!isEqual) {
        throw new Error('Password is incorrect!')
    }

    const token = jwt.sign({ id: user.id, phone: user.phone }, 'somesupersecretkey', {
        expiresIn: '24h'
    })

    return {
        id: user.id,
        access_token: token,
        expiresIn: 24
    }
}

const signup = async (_, args, context) => {
    try {
        const validPhone = await context.models.User.findOne({ phone: args.input.phone })
        
        if (validPhone) {
            throw new Error('User exists already.')
        }

        const hashedPassword = await bcrypt.hash(args.input.password, 12)

        const user = new context.models.User({
            phone: args.input.phone,
            email: args.input.email,
            password: hashedPassword,
            first_name: args.input.first_name,
            last_name: args.input.last_name
        })

        const result = await user.save()
        
        const token = jwt.sign({ id: result.id, phone: result.phone }, 'somesupersecretkey', {
            expiresIn: '24h'
        })
    
        return {
            id: result.id,
            access_token: token,
            expiresIn: 1
        }
    } catch (error) {
        throw error
    }
}

const AuthMutation = {
    login,
    signup
}

export {
    AuthMutation
}