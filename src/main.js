import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import './assets/css/main.styl'

import './plugins/bootstrapVue'
import BootstrapVue from 'bootstrap-vue-3'

import './plugins/fontAwesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { formatNumber } from '@/filters/numeral'

const app = createApp(App)
app.config.globalProperties.$filters = {
  formatNumber
}

app.use(store).use(router).use(BootstrapVue).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
