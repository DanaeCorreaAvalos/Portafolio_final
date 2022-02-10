<template>
  <b-container>
  <b-card
    img :src="item.data.imagen"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text  v-model="item.data.imagen"
              label="URL Imagen"
              type="text"
              hint="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
              persistent-hint
              required
              class="mb-5"
              :rules="rules.imagen">
        <h3 class="font-weight-bold mb-5">{{ curso.data.nombre }}</h3>

    </b-card-text>

  </b-card>



  </b-container>
</template>

<script>
export default {
  name: "card",
  props: { curso: { type: Object } },

  methods: {},
};
</script>

<style>
</style>