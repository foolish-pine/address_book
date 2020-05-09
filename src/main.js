import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCkNXS1YrGBNwYyEE-BjTu-zR69zR4PCJU",
  authDomain: "my-address-pj-b182a.firebaseapp.com",
  databaseURL: "https://my-address-pj-b182a.firebaseio.com",
  projectId: "my-address-pj-b182a",
  storageBucket: "my-address-pj-b182a.appspot.com",
  messagingSenderId: "702786218698",
  appId: "1:702786218698:web:ea63b7e604cad4635d2233",
  measurementId: "G-73MZK4VRRN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
