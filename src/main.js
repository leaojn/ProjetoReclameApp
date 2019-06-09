import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {configuracao} from './helpers/firebaseConfig'
import firebase from 'firebase'
import store from './store/store'
import Vuex from 'vuex'

Vue.config.productionTip = false

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)
Vue.use(Vuex)
new Vue({
  router,
  store,
  created(){
    firebase.initializeApp(configuracao);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
     });
  },
  render: h => h(App)
 
}).$mount('#app')
