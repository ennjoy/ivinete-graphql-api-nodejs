const photo = async (_, { owner_id }, context) => {

    if (!context.loggedIn) return null

    try {
        const photos = await context.models.Photo.find({ owner_id: owner_id || context.loggedIn.id })
        return photos.map(photo => {
            return {
                ...photo._doc, id: photo.id
            }
        })
    } catch (error) {
        throw error
    }
}

const PhotoQuery = {
    photo
}

export {
    PhotoQuery
}