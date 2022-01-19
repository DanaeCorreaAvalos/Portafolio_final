<template>










</template>


<script>

import {
    getAuth,
    signOut
} from "firebase/auth";
export default {
    data() {
        return {};
    },
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                alert('¡Sesión cerrada! Inicia sesión.');
                this.$router.push("login")
            }).catch((error) => {});
        },
    },
}
</script>

<style>

</style>
