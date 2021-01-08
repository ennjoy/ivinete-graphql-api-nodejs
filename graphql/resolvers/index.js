import authResolver from './auth.js'
import usersResolver from './users.js'
import pagesResolver from './pages.js'
import wallResolver from './wall.js'
import audioResolver from './audio.js'
import photosResolver from './photos.js'

const rootResolver = {
    ...authResolver,
    ...usersResolver,
    ...pagesResolver,
    ...wallResolver,
    ...audioResolver,
    ...photosResolver
}

export default rootResolver
