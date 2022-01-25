<template>

<b-container>
 <h1 class= "text-center display-4 my-4">Iniciar sesión</h1>

<div id="login" class="text-center" >

    <el-form label-width="100px" class="form-login" :model="formLabelAlign">
        <el-input placeholder="Correo electrónico" v-model="formLabelAlign.user"></el-input>
        <el-input type="password" placeholder="Contraseña" v-model="formLabelAlign.password" autocomplete="off"></el-input>
        <el-button type="primary" class="ingresar-login" @click="login">Ingresar</el-button>
    </el-form>
</div>


</b-container>
</template>


<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    data() {
        return {
            formLabelAlign: {
                user: "",
                password: "",
            },
        };
    },
    methods: {
        login() {
            const auth = getAuth();
            console.log(auth);
            const {
                formLabelAlign: {
                    user: email,
                    password
                },
            } = this;
            debugger;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    this.$router.push("/home");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
    }
}
</script>

<style scoped lang="scss">
.form-login {
    margin: 0% 20%;

    & * {
        margin-bottom: 5%;
    }
}

.ingresar-login {
margin-top: 5%;
}
</style>
