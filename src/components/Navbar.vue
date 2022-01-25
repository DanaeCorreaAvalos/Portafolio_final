<template>
<div>

<b-navbar toggleable="md" type="dark" variant="dark" class="mb-5">

<b-container>

  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  <b-navbar-brand :to="{name: 'Home'}">Portafolio</b-navbar-brand>
   <b-colapse>

  <b-navbar-nav>
        <b-nav-item :to="{name: 'Home'}" exact >Home</b-nav-item> 
        <b-nav-item :to="{name: 'About'}">About</b-nav-item>
        <b-nav-item :to="{name: 'Galeria'}">Galeria</b-nav-item>
        <b-nav-item :to="{name: 'Contacto'}">Contacto</b-nav-item>
      </b-navbar-nav>


   </b-colapse>
</b-container>
</b-navbar>





</div>
</template>
