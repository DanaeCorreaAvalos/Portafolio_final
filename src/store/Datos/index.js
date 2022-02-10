
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  addDoc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const state = { cursos: [] };

const mutations = {
  ACTUALIZAR_CURSOS(state, cursos) {
    state.cursos = cursos;
  },
};

const actions = {
  async getCursos({ commit }) {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "cursos"));
    const cursos = [];
    querySnapshot.forEach((doc) => {
      cursos.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    console.log("-> Trae cursos de la Store", cursos);
    commit("ACTUALIZAR_CURSOS", cursos);
  },

  async editCurso(context, { curso }) {
    console.log("->CURSO", curso);
    const db = getFirestore();
    const data = curso.data;
    await setDoc(doc(db, "cursos", curso.id), {
      nombre: data.nombre,
      tecnica: data.tecnica,
      año: data.año,
      imagen: data.imagen,
    });
  },

  async addCurso({ commit }, { curso }) {
    const db = getFirestore();
    console.log("recive addCurso", curso);
    await addDoc(collection(db, "cursos"), {
      nombre: curso.nombre,
      tecnica: curso.tecnica,
      año: curso.año,
      imagen: curso.imagen,
    });
  },

  async deleteCurso({ commit }, identificador) {
    const db = getFirestore();
    await deleteDoc(doc(db, "cursos", identificador));
    console.log("delete", identificador);
  },
};

const getters = {
  totalCupos(state) {
    const cursos = state.cursos;
    let suma = 0;
    for (let i = 0; i < cursos.length; i++) {
      suma = suma + parseInt(cursos[i].data.cupos);
    }
    return suma;
  },

  totalCursos(state) {
    // return getters.totalTerminados + getters.totalActivos;
    return state.cursos.length;
  },

  cursosActualizados(state, getters) {
    const cursos = state.cursos;
    cursos.forEach((item) => {
      item.data.terminado = item.data.estado === true ? "Si" : "No";

      // const fecha = item.data.fecha.toDate();
      // const yy = fecha.getFullYear();
      // const mm = fecha.getMonth();
      // const dd = fecha.getDate();
      // item.data.formatoFecha = dd + "/" + mm + "/" + yy;

      item.data.cursoCompleto =
        item.data.inscritos < item.data.cupos === true ? "No" : "Si";
    });

    return cursos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
