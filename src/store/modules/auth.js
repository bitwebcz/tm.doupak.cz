const state = () => ({
    isLogged: false
})

const getters = {}

const actions = {
    login(context) {
      context.commit('SET_LOGGED', { isLogged: true })
    },
    logout(context) {
      context.commit('SET_LOGGED', { isLogged: false })
    }
}

const mutations = {
    SET_LOGGED(state, payload) {
      state.isLogged = payload.isLogged
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
