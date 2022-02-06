<template>
 
  <div>
    <h1 class="Titulo text-center display-4 my-4">Galeria</h1>

    <b-container class ="Galeria">
      <b-row>
        <b-col cols="12" md="4">
          <b-card class ="my-4"
            img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2FBraga_final.png?alt=media&token=911764b9-916a-4bbd-b6fd-8e0ac72ee6df"
            img-top
             style="height: 500px;"
            align="center"
          >
          </b-card>
        </b-col>

        <b-col cols="12" md="4">
          <b-card class ="my-4"
          img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2FDee_Final.png?alt=media&token=51f9d254-95a9-4786-848c-1086ad499e57"
          img-top 
         
          align="center">
            
          </b-card>
        </b-col>

        <b-col cols="12" md="4">
          <b-card class ="my-4"
            img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2Fviolet_final.png?alt=media&token=ce2bae93-7ccc-4b99-9d03-a09a446b4b41"
            img-top
           
            align="center"
          >
          </b-card>
        </b-col>

        <b-col cols="12" md="4">
          <b-card class ="my-4"
            img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2Fcomandante_523_final_firma.png?alt=media&token=766781ee-2549-47a8-8728-6ca144abc64d"
            img-top
            align="center"
          >
          </b-card>
        </b-col>

        <b-col cols="12" md="4">
          <b-card class ="my-4"
            img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2Fintento_2.png?alt=media&token=99eeb220-35e8-4652-9ecf-54d0bcf01d17"
            img-top

            align="center"
          >
          </b-card>
        </b-col>

        <b-col cols="12" md="4">
          <b-card class ="my-4"
            img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2Fterminado_firma%20peque%C3%B1a.png?alt=media&token=be6a4d01-ef28-4963-b65c-86a0ce87eb2a"
            img-top
     
            align="center"
          >
          </b-card>
        </b-col>

         <b-col cols="12" md="4">
          <b-card class ="my-4"
            img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2Ftama%C3%B1o%20arreglado_2.jpg?alt=media&token=ab43ae9a-e4f6-4fa6-becc-71eae8eaa325"
            img-top
            
            align="center"
          >
          </b-card>
        </b-col>

         <b-col cols="12" md="4">
          <b-card class ="my-4"
            img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2Ftama%C3%B1o%20arreglado_6.jpg?alt=media&token=c3f5c535-703d-4830-bcf8-b95c0e8bc911"
            img-top
        
            align="center"





            
          >
          </b-card>
        </b-col>

         <b-col cols="12" md="4">
          <b-card
            img-src="https://firebasestorage.googleapis.com/v0/b/portafolio1-8985d.appspot.com/o/imagenes%2Ftama%C3%B1o%20arreglado_17.jpg?alt=media&token=9b3555eb-5e9e-4135-9500-a43773f0ab14"
            img-top

            align="center"
          >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>





</template>

<script>
import { mapActions, mapState } from "vuex";
import firebase from "firebase";
export default {
  name: "Especies",

  data() {
    return {
      personajes: {
        data: {
          nombre: "",
          tecnica: "",
          año: "",
          id: "",
          
        },
      },
    };
  },

  computed: {
    ...mapState("Datos", ["Personajes"]),
  },
  methods: {
    ...mapActions("Datos", ["getData"]),
  },
};
</script>

<style>

.img{
  width: 100%;
display:grid;
gap: 1em;
grid-auto-columns: 100%;
}


</style>