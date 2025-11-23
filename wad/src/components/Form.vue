<template>

<div class="loginform">
<form id="signUp" @submit="checkPassword"> 
    <p>Email: <input id="email" v-model="email" type="text" required></p>
    <p>Password: <input id="password" v-model="password" type="text" required minlength="8" maxlength="15"></p>
    
    <p v-if="errors.length">
    <b>Password is not valid!:</b>
    <p>
      <p v-for="error in errors">{{ error }}</p>
    </p>

  </p>
    <button type="submit" value="Submit">Signup</button>
    <!--<p><input type="submit" value="Submit"></p>-->

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
    checkPassword(e) {
      this.errors = [];
      //checking if user inputted anything
    
      if(!(this.password.charAt(0)==this.password.charAt(0).toUpperCase)) {
        this.errors.push("First letter is not capitalized!");
      }
      //making variables for saving info about conditions
      var twoLower=0;
      var oneUpper=false;
      var lowerDash=false;
      var numbers=false;
    
      for(let i=0;i<this.password.length;i++){
        if((twoLower>=2 && oneUpper && lowerDash && numbers)){
          break;
        }
        let element=this.password.charAt(i);
        if(!isNaN(element)){
          numbers=true;
        }
        else{
          if((element=="_")){
          lowerDash=true;
        }
        else{
        if((element.charAt(i)==element.charAt(i).toUpperCase)){
          oneUpper=true;
        }

        
        if((element.charAt(i)==element.charAt(i).toLowerCase)){
          twoLower++;
        }
      }
      }
      }
      if((twoLower<2)){
        this.errors.push("Does not contain 2 lowercase letters!");
      }
      if(!oneUpper){
        this.errors.push("Does not contain 1 uppercase letters!");
      }
      if(!lowerDash){
        this.errors.push("Does not contain '_' character!");
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