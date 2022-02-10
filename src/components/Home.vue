<template  class="Home">

<b-container>

      <h1 class= " Titulo text-center display-4 my-4 bold">Linka Winslett </h1>
      <!-- <p class="Subtitulo text-center display-2">Artista Visual</p> -->

      <b-card no-body class="overflow-hidden">
        <b-row xs= "12" md=12>
          <b-col >
            <b-img
            class="avatar"
              fluid
              style="height: 300px;"
              src="https://cdna.artstation.com/p/assets/images/images/018/706/864/large/danae-correa-edit12.jpg?1560389831"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body class="text-center" title="Galeria">
              <b-card-text class="textocard">
                Un pequeño vistazo a mi trabajo 
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
            class="avatar"
              fluid
              style="height: 300px;"
              src="https://cdna.artstation.com/p/assets/images/images/018/729/138/large/danae-correa-final-8.jpg?1560475166"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body class="text-center" title="About">
              <b-card-text class="textocard">
              
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
            class="avatar"
              fluid
              style="height: 300px;"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/972c0377397099.5c86b0e92c39f.jpg"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body class="text-center" title="Contacto">
              <b-card-text class="textocard">
                No dudes en contactarme ! 
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

<style lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Caveat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');







.Titulo {

font-family: 'Amatic SC'
/* font-family: 'Caveat' */


}

.Home {

background: #e2e3ba
}


.textocard{

font-family: 'Roboto', sans-serif;

}




/**** */


.card{
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &:hover{

  scale:1.1 ;
  transition: .5s;

  }
  &:not(:hover){

  scale:1.0;
  transition: .5s

  }
}

.card-link {

  font-family: 'Roboto', sans-serif;
  color: rgb(29, 28, 29);
}



.avatar:hover{

 cursor: pointer;
 /* scale: 1.2;
  */
}


h2{

  margin-top: 20px;
  margin-bottom: 25px;
}

@media (max-width: 500px) {
  .b-container {
    padding-top: 50px;
  }
}


</style>
