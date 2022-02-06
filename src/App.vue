<template>
   <div>
    <Navbar />

    <div> 
      <router-view />
    </div>

    <Footer />
  </div>
</template>


<script>

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import images from "@/components/Galeria";

export default {
  name: "App",
  components: { Navbar ,
  Footer,
  images,
 data() {
    return {
      image: {
        backgroundImages:
          "url(https://rickandmortypod.com/wp-content/uploads/2018/11/cropped-RM_page-header_background1-3.png)",
      },
    };
  },
}
};

</script>









<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
