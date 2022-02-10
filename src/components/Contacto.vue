<template>

<b-container>
  <h1 class= " Titulo text-center display-4 my-4">Contactame</h1>
 

<form class="form"  action="https://formspree.io/f/xyyoeldz"
  method="POST" >
<div class= "form__container">
<!-- <h2 class= "form__title">Contactame</h2> -->
<input type="text" class="form__input" placeholder="Nombre:" name="name">
<input type="email" class="form__input" placeholder="Email:"  name="_replyto">
<textarea class="form__input__form__input--message" placeholder="Mensaje:" name="message" ></textarea>

<input type="submit" value="Enviar" class="form__cta">
</div>
</form>

<hr>

</b-container>

</template>

<script>



</script>



<style >

/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'); */
@media(max-width: 450px){
 
}

*{

margin: 0;
padding: 0;
box-sizing: border-box;

}

body{
 background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
 min-height:100vh;
 width:100% ;

 font-family: 'Roboto', sans-serif;

}



.form{

background-color:#fff;
width: 90%;
margin: auto;
max-width:400px;
border-radius: 1em;
padding: 3.5em;

}

.form__container{
width: 100%;
display:grid;
gap: 1em;
grid-auto-columns: 100%;

}
.form__input{

  font-family: inherit;
  font-size: 1rem;
  padding: .8rem 1em ;
  /* outline: none;
  border: none; */
  border: 1px solid #bbb0bb;
  border-radius: 0.2em;

}


.form__input__form__input--message{
  resize: none;
  padding: 1.8em 1em;
  margin-bottom: .5em;
}

.form__cta{

  font-family: inherit;
  background-color: #089FE0;
  color: #fff;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  padding: .7em 0;
  border-radius: .2em;
  cursor:pointer;
  font-weight:400;
}


.form__title{
  text-align: center;
  font-size:1.9rem;
  margin-bottom: .4em;
}


/* redes sociales */











</style>