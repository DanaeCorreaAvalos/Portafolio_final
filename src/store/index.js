import Vue from 'vue'
import Vuex from 'vuex'
import Datos from "./Datos";
import Firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personajes: [],
  },

  mutations: {
    VER_PG(state, newpersonajes) {
      state.personajes = newpersonajes;
    },
    CREAR_PG(state, personaje) {
      state.personajes.push(personaje);
    },

    ELIM_PG(state, personajeid) {
      const eliminarPersonaje = state.personajes.filter(
        (personaje) => personaje.id === personajeid
      );
      const indexOfPG = state.personajes.indexOf(eliminarPersonaje[0]);
      state.personajes.splice(indexOfPG, 1);
    },
  },
  actions: {
    verTodos(context) {
      Firebase.firestore()
        .collection("galeria")
        .get()
        .then((collection) => {
          const personajes = [];
          collection.forEach((document) => {
            personajes.push({ id: document.id, ...document.data() });
          });
          context.commit("VER_PG", personajes);
        });
    },

    crearNuevoPG(context, personaje) {
      Firebase.firestore().collection("galeria").add(personaje);
      context.commit("CREAR_PG", personaje);
    },

    adiosPacientet(context, personaje) {
      Firebase.firestore().collection("galeria").doc(personaje.id).delete();
      context.commit("ELIM_PG", personaje.id);
    },

    editarPaciente(context, personaje) {
      Firebase.firestore()
        .collection("galeria")
        .doc(personaje.id)
        .update(personaje);
    },
  },
  modules: {
  Datos

  },
});
