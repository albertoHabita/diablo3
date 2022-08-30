import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import './plugins/bootstrapVue'
import BootstrapVue from 'bootstrap-vue-3'

import './plugins/fontAwesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(store).use(router).use(BootstrapVue).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
