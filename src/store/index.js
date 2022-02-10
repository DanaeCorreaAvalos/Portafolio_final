import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patients: [],
  },

  mutations: {
    VER_PACIENTES(state, newpatients) {
      state.patients = newpatients;
    },
    CREAR_PACIENTE(state, patient) {
      state.patients.push(patient);
    },

    ELIM_PACIENTES(state, patientid) {
      const eliminarPaciente = state.patients.filter(
        (patient) => patient.id === patientid
      );
      const indexOfPatient = state.patients.indexOf(eliminarPaciente[0]);
      state.patients.splice(indexOfPatient, 1);
    },
  },
  actions: {
    verTodos(context) {
      Firebase.firestore()
        .collection("pacients")
        .get()
        .then((collection) => {
          const patients = [];
          collection.forEach((document) => {
            patients.push({ id: document.id, ...document.data() });
          });
          context.commit("VER_PACIENTES", patients);
        });
    },

    crearNuevoPacient(context, patient) {
      Firebase.firestore().collection("pacients").add(patient);
      context.commit("CREAR_PACIENTE", patient);
    },

    adiosPacientet(context, patient) {
      Firebase.firestore().collection("pacients").doc(patient.id).delete();
      context.commit("ELIM_PACIENTES", patient.id);
    },

    editarPaciente(context, patient) {
      Firebase.firestore()
        .collection("pacients")
        .doc(patient.id)
        .update(patient);
    },
  },
  modules: {},
});