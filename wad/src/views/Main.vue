<template>
  <div class="main">

    <button @click="goToLogin"> Logout </button>

    <AllPosts />

    <div class="button-container">
      <button class="add-btn" @click="addPost">
        Add post
      </button>
      <button class="delete-btn" @click="deletePost">
        Delete all
      </button>
    </div>

  </div>
</template>

<script>
import AllPosts from '@/components/AllPosts.vue'

export default {
  name: 'Main',
  components: { AllPosts },

  methods: {
    addPost() {
      //add button functionality for both
      this.$store.commit("");
    },
    goToLogin() {
      //this should log out the person as well
      this.$router.push('/login')
    }
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

.reset-btn {
  background-color: #ff6b6b;
}

.reset-btn:hover {
  background-color: #ff4a4a;
}
</style>