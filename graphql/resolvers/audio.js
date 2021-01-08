import Audio from '../../models/audio.js'

const audio = async ({ owner_id }, req) => {
    if (!req.isLoggedIn) {
        throw new Error('Unauthenticated!');
    }
    console.log(owner_id)
    try {
        const audios = await Audio.find({ owner_id: owner_id || req.id })
        return audios.map(audio => {
            return {
                ...audio._doc, id: audio.id
            }
        })
    } catch (error) {
        throw error
    }
}

export default {
    audio
}