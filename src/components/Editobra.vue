<template>
  <div>


    
    <form class="container" @submit.prevent="sendForm">
      <div class="form-group">
        <label for="">Nombre </label>
        <input
          class="form-control"
          v-if="crearForm"
          type="text"
          v-model="patient.name"
        />
        <input
          class="form-control"
          v-else
          type="text"
          v-model="paraEditar.name"
        />
      </div>
      <div class="form-group">
        <label for="">Apellido </label>
        <input
          class="form-control"
          v-if="crearForm"
          type="text"
          v-model="patient.apellido"
        />
        <input
          class="form-control"
          v-else
          type="text"
          v-model="paraEditar.apellido"
        />
      </div>
      <div class="form-group">
        <label for="">Edad </label>
        <input
          class="form-control"
          v-if="crearForm"
          type="number"
          v-model="patient.age"
        />
        <input
          class="form-control"
          v-else
          type="text"
          v-model="paraEditar.age"
        />
      </div>
      <div class="form-group">
        <label for="">Prevision </label>
        <input
          class="form-control"
          v-if="crearForm"
          type="text"
          v-model="patient.prevision"
        />
        <input
          class="form-control"
          v-else
          type="text"
          v-model="paraEditar.prevision"
        />
      </div>
      <div>
        <button class="btn btn-success" v-if="crearForm" type="submit">
          Agregar
        </button>
        <button class="btn btn-warning" v-else type="submit">Listo</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  data: () => ({
    patient: {
      name: null,
      apellido: null,
      age: null,
      prevision: null,
    },
  }),
  props: {
    paraEditar: { type: Object, require: true },
    crearForm: { type: Boolean, require: true },
  },

  methods: {
    sendForm() {
      if (this.crearForm) {
        this.$store.dispatch("crearNuevoPacient", this.patient);
        this.patient = {};
      } else {
        this.$store.dispatch("editarPaciente", this.paraEditar);
      }
    },
  },
};
</script>

<style>
/* IDEA PARA EL CRUD  */
</style>