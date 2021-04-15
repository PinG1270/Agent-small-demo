import router from './routes/index.js'
import NgProgress from 'nprogress'
import { getToken,TokenKey } from './utils/auth.js'

let token = getToken(TokenKey)
router.beforeEach((to, from, next) => {
    NgProgress.start();
    if (token) {
        NgProgress.done()
        next()
    } else {
        if (to.path === '/login') {
            next()
        } else {
            if (to.meta.auth) {
                // next('/login?redicet='+to.path)
                next('/login')
            } else {
                next()
            }
        }
    }
})