<template>

<div class="loginform">
<form id="logIn" @submit.prevent="handleLogin">
        <p class="field">
      <label>Email:</label>
      <input v-model="email" type="text" required>
    </p>

    <p class="field">
      <label>Password:</label>
      <input v-model="password" type="password" required minlength="8" maxlength="15">
    </p>    
    <p v-if="errors.length">
    <b>Login unsuccessful! <br>
        Please check your email and password</b>
  </p>
    <button type="submit" value="Submit">Login</button>
    Or
    <button type="button" @click="goToSignup">Signup</button>

</form>
</div>

</template>


<script>
import axios from "axios";

export default {
  name: 'LoginForm',
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    goToSignup() {
      this.$router.push({ name: 'Signup' });
    },

    async handleLogin() {
      this.errors = [];

      try {
        const res = await axios.post("http://localhost:3000/api/login", {
          email: this.email,
          password: this.password
        });

        
        localStorage.setItem("token", res.data.token);
        if (res.data.user) localStorage.setItem("user", JSON.stringify(res.data.user));

        this.$router.push({ name: "Main" });
      } catch (err) {

        this.errors.push("Login unsuccessful! Please check your email and password");
      }
    }
  }
};
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
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: 500;
}

</style>