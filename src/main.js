import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex';
import store from './assets/js/store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCfTuqp6uB210BsH4BwcgNR_yepDBcudV4',
        libraries: 'places',
    },
})
Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
    store,
  render: h => h(App),
}).$mount('#app')
