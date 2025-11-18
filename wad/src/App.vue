<template>
  <div id="app">
    <Header/>

    <main>
      <router-view/>
    </main>
    
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue' 

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body{
    font-family: 'Poppins', sans-serif;
    background-color: #F7F3E3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
