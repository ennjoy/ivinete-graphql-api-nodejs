const pageById = async (_, { id }, context) => {
    
    if (!context.loggedIn) return null

    try {
        const page = await context.models.Page.findById(id)
        return {
            ...page._doc, id: page.id
        }
    } catch (error) {
        throw error
    }
}

const pageCreate = async (_, args, context) => {

    if (!context.loggedIn) return null

    try {
        const page = new context.models.Page({
            user_id: context.loggedIn.id,
            name: args.input.name,
            about: args.input.about
        })

        const pageSave = await page.save()

        return {
            ...pageSave._doc,
            id: pageSave.id
        }
    } catch (error) {
        throw error
    }
}

const PageQuery = {
    pageById
}

const PageMutation = {
    pageCreate
}

export {
    PageQuery,
    PageMutation
}

