import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    owner_id: {
		type: mongoose.ObjectId
    },
    photo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('photos', schema)