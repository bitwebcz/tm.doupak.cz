<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <button v-if="!isLogged" @click="login">log in</button>
  <button v-else @click="logout">Logout</button>
  <button @click="myAxiosExec">Exec Axios</button>
  <p> axios data: {{ state.axiosData }} </p>
  <p> lodash data: {{ lodashData }} </p>

  <p>
    Current color theme is: {{ themeColor }}
  </p>
</template>

<script setup>
/**
 * The first HelloWorld component
 *
 * @author    Zara Ali
 * @version   1.0
 * @property  {String} msg displayed text message
 */
import { defineProps, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import useAxios from '/src/composables/useAxios.js'
import lodash from 'lodash'

defineProps({
  msg: {
      type: String,
      required: true,
      validator: value => {
          return [
            'Hello Vue 3 + Vite',
            'Hello World'
          ].includes(value)
      }
  }
})

const { response, error, loading, uploadProgress, exec } = useAxios()
const myAxiosExec = async () => {
  await exec({
    url: 'https://rickandmortyapi.com/api/character/1',
    method: 'get'
  })

  // Validate if an error occurs, set the data where you need to be or not
  state.axiosData = await !error.value ? await response.value.data.name : null
}

const store = useStore()
const isLogged = computed(() => store.state.auth.isLogged)
const themeColor = computed(() => store.state.config.themeColor)
const login = () => store.dispatch('auth/login')
const logout = () => store.dispatch('auth/logout')
const state = reactive({
    count: 0,
    axiosData: null,
})
const myArr = [1,2,3]
const lodashData = lodash.fill(myArr, 'asd')
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
