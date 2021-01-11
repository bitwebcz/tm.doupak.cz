import NotFound from "/src/views/NotFound.vue"
import ErrorLayout from "/src/layouts/ErrorLayout.vue"

export default [
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
      meta: {
          layout: ErrorLayout
      }
    }
]
