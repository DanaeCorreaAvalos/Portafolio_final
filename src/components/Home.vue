<template>




<b-container>

      <h1 class= " Titulo text-center display-4 my-4 bold">Linka Winslett </h1>
      <!-- <p class="Subtitulo text-center display-2">Artista Visual</p> -->

      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6" >
            <b-img
              fluid
              src="https://cdna.artstation.com/p/assets/images/images/018/706/864/large/danae-correa-edit12.jpg?1560389831"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Galeria">
              <b-card-text>
                Galeria
              </b-card-text>
              <b-link :to="{ name: 'Galeria' }" class="card-link"
                >Más!</b-link
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <br />

            <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6" >
            <b-img
              fluid
              src="https://cdna.artstation.com/p/assets/images/images/018/729/138/large/danae-correa-final-8.jpg?1560475166"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="About">
              <b-card-text>
                Acerca de 
              </b-card-text>
              <b-link :to="{ name: 'About' }" class="card-link"
                >Más!</b-link
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <br />


            <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6" >
            <b-img
              fluid
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/972c0377397099.5c86b0e92c39f.jpg"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Contacto">
              <b-card-text>
                Contactame ! 
              </b-card-text>
              <b-link :to="{ name: 'Contacto' }" class="card-link"
                >Más!</b-link
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <br />

      







</b-container>





</template>


















<script>

// import {
//     getAuth,
//     signOut
// } from "firebase/auth";
// export default {
//     data() {
//         return {};
//     },
//     methods: {
//         logout() {
//             const auth = getAuth();
//             signOut(auth).then(() => {
//                 alert('¡Sesión cerrada! Inicia sesión.');
//                 this.$router.push("login")
//             }).catch((error) => {});
//         },
//     },
// }
</script>

<style>


@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Caveat:wght@500&display=swap');
.Titulo {

font-family: 'Amatic SC'
/* font-family: 'Caveat' */


}





 


</style>
