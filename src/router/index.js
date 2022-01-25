import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Galeria from "@/components/Galeria";
import About from "@/components/About";
import Contacto from "@/components/Contacto";
import NotFound from "@/components/NotFound"

import {getAuth as auth
} from "firebase/auth";

Vue.use(VueRouter)

const routes = [
{
  path: "/home",
  name: "Home",
  component: Home,

},

{
  path: "/home",
  name: "Home",
  component: Home,
},

{
  path: "/galeria",
  name: "Galeria",
  component: Galeria,

},

{
  path: "/about",
  name: "About",
  component: About,
},

{
  path: "/contacto",
  name: "Contacto",
  component: Contacto,

},

{
  path: "*",
  redirect: "/NotFound",
  component: NotFound
},

]


const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  let user = auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("login");
  } else if (user && !authRequired) {
    next("home");
  } else {
    next();
  }
});



export default router
