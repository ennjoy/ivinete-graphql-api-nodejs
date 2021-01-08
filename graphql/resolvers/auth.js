import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Users from '../../models/users.js'

const login = async (args) => {

    const user = await Users.findOne({ phone: args.input.phone })
    if (!user) {
        throw new Error('User does not exist!')
    }

    const isEqual = await bcrypt.compare(args.input.password, user.password)
    if (!isEqual) {
        throw new Error('Password is incorrect!')
    }

    const token = jwt.sign({ id: user.id, phone: user.phone }, 'somesupersecretkey', {
        expiresIn: '1h'
    })

    return {
        id: user.id,
        token: token,
        tokenExpiration: 1
    }
}

const signup = async (args) => {
    try {
        const validPhone = await Users.findOne({ phone: args.input.phone })
        
        if (validPhone) {
            throw new Error('User exists already.')
        }

        const hashedPassword = await bcrypt.hash(args.input.password, 12)

        const users = new Users({
            phone: args.input.phone,
            email: args.input.email,
            password: hashedPassword,
            first_name: args.input.first_name,
            last_name: args.input.last_name
        })

        const user = await users.save()
        
        const token = jwt.sign({ id: user.id, phone: user.phone }, 'somesupersecretkey', {
            expiresIn: '1h'
        })
    
        return {
            id: user.id,
            token: token,
            tokenExpiration: 1
        }
    } catch (error) {
        throw error
    }
}

export default {
    login,
    signup
}