<template>
<div>

<b-navbar toggleable="md" type="dark" variant="dark" class="mb-5">

<b-container>

  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  <b-navbar-brand class="Portafolio" :to="{name: 'Home'}">Linka Winslett</b-navbar-brand>
   <b-colapse>

  <b-navbar-nav>
        <b-nav-item :to="{name: 'Home'}" exact >Home</b-nav-item> 
        <b-nav-item :to="{name: 'Galeria'}">Galeria</b-nav-item>
        <b-nav-item :to="{name: 'About'}">About</b-nav-item>
        <b-nav-item :to="{name: 'Contacto'}">Contacto</b-nav-item>

      </b-navbar-nav>


   </b-colapse>
</b-container>
</b-navbar>





</div>
</template>

<style scoped>

/* @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
.Portafolio{
font-family: 'Amatic SC';
} */
</style>