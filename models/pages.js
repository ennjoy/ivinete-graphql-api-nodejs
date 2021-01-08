import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    user_id: {
        type: mongoose.ObjectId
    },
	name: {
		type: String,
		required: true,
		min: 2,
		max: 255
    },
    about: {
        type: String,
        min: 1,
        max: 1024
    },
	photo: {
		type: String,
		default: null
	},
	cover: {
		type: String,
		default: null
	},
	verified: {
		type: Boolean,
		default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('pages', schema)