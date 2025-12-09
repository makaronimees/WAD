<template>

<div class="loginform">
<form id="logIn" @submit="checkPassword"> 
    <p>Email: <input id="email" v-model="email" type="text" required></p>
    <p>Password: <input id="password" v-model="password" type="text" required minlength="8" maxlength="15"></p>
    
    <p v-if="errors.length">
    <b>Login unsuccessful! <br>
        Please check your email and password</b>
  </p>
    <button type="submit" value="Submit">Login</button>
    Or
    <button @click="goToSignup">Signup</button>

</form>
</div>

</template>


<script>
//checking inputs
export default {
  name: 'Form',
  data() {
    return{
      email:"",
      password:"",
      errors:[]
    }
  },
  methods:{
    goToSignup() {
        this.$router.push('/signup')
    },
    checkPassword(e) {
      //check the database for the credentials
    }
  }

}

</script>


<style>
.loginform{
  text-align: center;
    background-color: rgb(219, 219, 219);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 30px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    
  
  
}

form > button {
    background-color:lightsteelblue;
    color: black;
    border-radius: 5px;
    min-width: 100px;
    min-height: 30px;
    border-color:rgb(152, 169, 192);
}
form > p {
    color:black;
    text-align: left;
}
form > p > input {
    border-radius: 5px;
    border-color: lightsteelblue;
    min-height: 20px;
    color:gray;
    
}

</style>