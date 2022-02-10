import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Galeria from "@/components/Galeria";
import About from "@/components/About";
import Contacto from "@/components/Contacto";
import NotFound from "@/components/NotFound"
import Editobra from "@/components/Editobra"
import Addobra from "@/components/Addobra"

Vue.use(VueRouter)

const routes = [
{
  path: "/",
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


{
  path: "/Editobra",
  name: "Edit",
  component: Editobra,

},

{
  path: "/Addobra",
  name: "Add",
  component: Addobra,

},


]


const router = new VueRouter({
  routes
})





export default router
