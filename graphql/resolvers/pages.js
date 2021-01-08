import Pages from '../../models/pages.js'

const pagesFindById = async ({ id }, req) => {
    if (!req.isLoggedIn) {
        throw new Error('Unauthenticated!');
    }
    try {
        const pages = await Pages.findById(id)
        return {
            ...pages._doc, id: pages.id
        }
    } catch (error) {
        throw error
    }
}

const pagesCreate = async (args, req) => {
    // if (!req.isLoggedIn) {
    //     throw new Error('Unauthenticated!');
    // }
    try {
        const pages = new Pages({
            user_id: req.id,
            name: args.input.name,
            about: args.input.about
        })

        const page = await pages.save()

        return {
            ...page._doc, id: page.id
        }
    } catch (error) {
        throw error
    }
}

export default {
    pagesFindById,
    pagesCreate
}