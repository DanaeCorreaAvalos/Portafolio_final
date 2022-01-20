<template>

  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">Portafolio</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Galeria</b-nav-item>
        <b-nav-item href="#">Contacto</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
