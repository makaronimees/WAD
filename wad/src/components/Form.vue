<template>

<div class="signupform">
<form id="signUp" @submit.prevent="handleSignup"> 
   <p class="field">
      <label>Email:</label>
      <input id="email" v-model="email" type="text" required>
    </p>

    <p class="field">
      <label>Password:</label>
      <input id="password" v-model="password" type="password" required minlength="8" maxlength="15">
    </p>
    
    <p v-if="errors.length">
    <b>Password is not valid!:</b>
    <p>
      <p v-for="error in errors">{{ error }}</p>
    </p>

  </p>
    <button type="submit" value="Submit">Signup</button>


</form>
</div>

</template>

<script>
import axios from "axios";
//checking inputs
export default {
  name: 'Form',
  data() {
    return{
      email:"",
      password:"",
      errors:[],
      serverError: ""
    }
  },
methods: {
  async handleSignup() {
    this.serverError = "";
    this.checkPassword(); 

    if (this.errors.length > 0) return; 

    try {
      const res = await axios.post("http://localhost:3000/api/signup", {
        email: this.email,
        password: this.password
      });

      localStorage.setItem("token", res.data.token);
      if (res.data.user) localStorage.setItem("user", JSON.stringify(res.data.user));

      this.$router.push({ name: "Main" });
    } catch (err) {
      this.serverError = err?.response?.data?.message || "Signup failed";
    }
  },

  checkPassword() {
    this.errors = [];

    if (!(this.password.charAt(0) == this.password.charAt(0).toUpperCase())) {
      this.errors.push("First letter is not capitalized!");
    }

    let twoLower = 0;
    let oneUpper = false;
    let lowerDash = false;
    let numbers = false;

    for (let i = 0; i < this.password.length; i++) {
      if (twoLower >= 2 && oneUpper && lowerDash && numbers) break;

      let element = this.password.charAt(i);

      if (!isNaN(element)) {
        numbers = true;
      } else {
        if (element.localeCompare("_") == 0) {
          lowerDash = true;
        } else {
          if (element.localeCompare(element.toUpperCase()) == 0) {
            oneUpper = true;
          }
          if (element.localeCompare(element.toLowerCase()) == 0) {
            twoLower++;
          }
        }
      }
    }

    if (twoLower < 2) this.errors.push("Does not contain 2 lowercase letters!");
    if (!oneUpper) this.errors.push("Does not contain 1 uppercase letter!");
    if (!lowerDash) this.errors.push('Does not contain "_" character!');
    if (!numbers) this.errors.push("Does not contain 1 number!");
  }
}
}

</script>
<style>
.signupform{
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