<template>
<div class="header">
  <h2>PostIT</h2>

  <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}

</script>

<style>

@media (max-width: 800px) {
    .header, nav, .links {
        display: flex;
    }
    .header {
        flex-direction: column;
        align-items: center;
        
    }
}

nav {
  padding: 30px;
  font-weight: bold;
}

nav a {
    padding: 10px 15px;
    text-align: center;
    color: #000000;
    text-decoration: none;
}

nav a:hover {
    background-color: #554f83;
    color: cornsilk;
    border-radius:5px ;
}

.header {
    padding-top: .5em;
    padding-bottom: .5em;
    border: 1px solid #646174;
    background-color: #7871AA;
    border-radius: 5px;
}
h2{
  color:cornsilk;
}

.loginButton {
  color: #7871AA;
  background-color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

</style>