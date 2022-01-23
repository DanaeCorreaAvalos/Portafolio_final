<template>


<b-container>
<h1>este es el home</h1>
<div>

  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="/Contacto" variant="primary">Contacto</b-button>
  </b-card>
</div>

 <router-link to="/">Home</router-link> 

 <router-link to="/about">About</router-link> 

 <router-link to="galeria">Galeria</router-link> 

 <router-link to="/contacto">Contacto</router-link>
   



</b-container>







</template>


<script>

import {
    getAuth,
    signOut
} from "firebase/auth";
export default {
    data() {
        return {};
    },
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                alert('¡Sesión cerrada! Inicia sesión.');
                this.$router.push("login")
            }).catch((error) => {});
        },
    },
}
</script>

<style>

</style>
