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
  name: "App",
  components: { Header, Footer },

  mounted() {
    this.$store.dispatch("fetchPosts");
  }
};
</script>

<style>
body{
    font-family: 'Poppins', sans-serif;
    background-color: #F7F3E3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>