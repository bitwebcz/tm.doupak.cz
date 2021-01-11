const state = () => ({
    isLogged: false
})

const getters = {}

const actions = {
    login() {
      //
    },
    logout() {
      //
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
