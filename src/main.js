import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1IMXVLiLF0YdCA8L7fODnZ7ZbroWcdKw",
  authDomain: "portafolio1-8985d.firebaseapp.com",
  projectId: "portafolio1-8985d",
  storageBucket: "portafolio1-8985d.appspot.com",
  messagingSenderId: "660142571171",
  appId: "1:660142571171:web:c8b4a04f799eb6bbca4916"
};

// Initialize Firebase
initializeApp(firebaseConfig);



Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
