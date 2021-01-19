const audio = async (_, { owner_id }, context) => {
    
    if (!context.loggedIn) return null

    try {
        const audios = await context.models.Audio.find({ owner_id: owner_id || context.loggedIn.id })
        return audios.map(audio => {
            return {
                ...audio._doc, id: audio.id
            }
        })
    } catch (error) {
        throw error
    }
}

const AudioQuery = {
    audio
}

export {
    AudioQuery
}