import Photos from '../../models/photos.js'

const photos = async ({ owner_id }, req) => {
    if (!req.isLoggedIn) {
        throw new Error('Unauthenticated!');
    }
    try {
        const photos = await Photos.find({ owner_id: owner_id || req.id })
        return photos.map(photo => {
            return {
                ...photo._doc, id: photo.id
            }
        })
    } catch (error) {
        throw error
    }
}

export default {
    photos
}