<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>
    <MainLayout v-else/>

  </div>
</template>

<style lang="stylus">
#app
  padding 60px 0
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #ffffff // Le ponemos un color de letra blanco para que resalte
  background-color #15202b // Le cambiamos el color de fondo por un azul marino oscuro
</style>
<script>
import store from './store'
import { mapState } from 'vuex'

import LoadLayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },
  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  },
  methods: {
    // Nuestra función
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  // Hook created
  created () {
    this.init()
  }
}
</script>
}
