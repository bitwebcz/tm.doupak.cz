import { createRouter, createWebHistory } from "vue-router"
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // TODO: handle routes under auth
    next()
  } else {
    next()
  }
})

export default router
