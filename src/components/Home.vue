<template>

<b-container>
<div class="mt-5" align="center">
<b-row mt-5>
<b-col cols="12" md="4">

  <b-card
    img-src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/972c0377397099.5c86b0e92c39f.jpg"
      img-top
      align="center"

  > <p>Lorem, ipsum dolor.</p>
      <b-button :to="{name: 'About'}"  variant="primary">About</b-button>
  </b-card>

</b-col>



<b-col cols="12" md="4">

  <b-card
    img-src="https://cdna.artstation.com/p/assets/images/images/018/729/136/large/danae-correa-final-7.jpg?1560475191"
      img-top
      align="center"

  > <p>Lorem, ipsum dolor.</p>
 <b-button :to="{name: 'Galeria'}"  variant="primary">galeria</b-button>
  </b-card>

</b-col>


<b-col cols="12" md="4">

  <b-card
    img-src="https://cdna.artstation.com/p/assets/images/images/018/729/138/large/danae-correa-final-8.jpg?1560475166"
      img-top
      align="center"
  > <p>Lorem, ipsum dolor.</p>
<b-button :to="{name: 'Contacto'}" variant="primary">contacto</b-button>
  </b-card>

</b-col>






  </b-row>
</div>

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
