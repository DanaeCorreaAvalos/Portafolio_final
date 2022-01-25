<template>

<b-container>
  <h1 class= "text-center display-4 my-4">Contactame</h1>


<div id="login" class="text-center" >

    <el-form label-width="100px" class="form-login" :model="formLabelAlign">
        <el-input placeholder="Correo electrónico" v-model="formLabelAlign.user"></el-input>
        <el-input type="password" placeholder="Contraseña" v-model="formLabelAlign.password" autocomplete="off"></el-input>
        <el-button type="primary" class="ingresar-login" @click="login">Ingresar</el-button>
    </el-form>
</div>

 <p  class= "text-center display-4 my-4">aqui redes sociales</p>


</b-container>

</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>



