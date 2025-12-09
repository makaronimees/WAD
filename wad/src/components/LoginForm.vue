<template>

<div class="loginform">
<form id="logIn" @submit="checkPassword"> 
    <p>Email: <input id="email" v-model="email" type="text" ></p>
    <p>Password: <input id="password" v-model="password" type="text"  minlength="8" maxlength="15"></p>
    
    <p v-if="errors.length">
    <b>Login unsuccessful! Please check your email or password</b>
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
      this.errors = [];//array to save all the problems
    
      if(!(this.password.charAt(0)==this.password.charAt(0).toUpperCase())) {
        this.errors.push("First letter is not capitalized!");
      }
      //making variables for saving info about conditions
      let twoLower=0;
      let oneUpper=false;
      let lowerDash=false;
      let numbers=false;
    
      for(let i=0;i<this.password.length;i++){
        if((twoLower>=2 && oneUpper && lowerDash && numbers)){
          break;
        }
        
        else {
          let element=this.password.charAt(i);//saving it as a variable so its easier to read
    
          if(!isNaN(element)){//first checking if its a number, so it hopefully doesnt try to convert numbers to uppercase etc
            numbers=true;
          }

          else{
            if((element.localeCompare("_")==0)){
              lowerDash=true;
            }
            else{
              if((element.localeCompare(element.toUpperCase())==0)){
                oneUpper=true;
              }

              if((element.localeCompare((element.toLowerCase()))==0)){
                twoLower++;
              }
            }
          }
        }
      
      }
      //now lets let the user know why their passowrd sucks
      if((twoLower<2)){
        this.errors.push("Does not contain 2 lowercase letters!");
      }
      if(!oneUpper){
        this.errors.push("Does not contain 1 uppercase letter!");
      }
      if(!lowerDash){
        this.errors.push('Does not contain "_" character!');
      }
      if(!numbers){
        this.errors.push("Does not contain 1 number!");
      }
      
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