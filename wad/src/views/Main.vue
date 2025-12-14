<template>
  <div class="main">

    <button v-if="authResult" @click="goToLogin"> Logout </button>

    <AllPosts />

    <div class="button-container">
      <button class="add-btn" @click="goToAddPost">
        Add a post
      </button>
      <button class="delete-btn" @click="deleteAll">
        Delete all posts
      </button>
    </div>


  </div>
</template>

<script>
import AllPosts from '@/components/AllPosts.vue';
import auth from '@/auth';

export default {
  name: 'Main',
  components: {
    AllPosts
  },

  data: function() {
    return {
      authResult: auth.authenticated()}
  },

  methods: {
    goToLogin() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push({ name: 'Login' });
  },
    goToAddPost() {
          this.$router.push('/addpost')
    },
    deleteAll() {
        fetch('http://localhost:3000/api/posts/', {
            method: "DELETE", headers: {"Content-Type": "application/json"},})
          .then((response) => response.json())
          .then((data) => {
              console.log(data);
              })
          .catch((e) => {console.log(e); 
          });
        this.$router.go();
        },
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content:center;
  margin-top: 30px;
  margin-bottom: 40px;  
}

button {
  background-color: #7871AA;
  color: white;
  border: none;
  padding: 12px 18px;
  margin: 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}
</style>