import About from "/src/views/About.vue"

export default [
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
          requiresAuth: true
      }
    }
]
