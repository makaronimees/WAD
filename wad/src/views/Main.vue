<template>
  <div class="main">

    <AllPosts />

    <div class="reset-container">
      <button class="reset-btn" @click="resetAllLikes">
        Reset all likes
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
    resetAllLikes() {
      this.$store.commit("resetLikes");
    }
  }
}
</script>

<style scoped>
.reset-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;  
}

.reset-btn {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.reset-btn:hover {
  background-color: #ff4a4a;
}
</style>