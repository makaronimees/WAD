<template>
  <div class="vue-post-card">
    <div class="vue-post-header">
      <div class="vue-post-header-left">
        <img :src="post.profilePicture" class="vue-profile-pic" />
        {{ post.authorName }}
      </div>
      <span class="vue-date">{{ post.date }}</span>
    </div>

    <img v-if="post.postPicture" 
         :src="post.postPicture" 
         class="vue-post-image" />

    <div class="vue-post-caption">{{ post.postCaption }}</div>

    <div class="vue-post-footer">
      <button class="vue-like-btn" @click="likePost">
        👍 {{ post.likes }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: { post: Object },

  methods: {
    likePost() {
      this.$store.commit("incrementLikes", this.post.id);
    }
  }
};
</script>

<style scoped>
.vue-post-card {
  border-radius: 12px;
  background-color: #D9BBF9;
  width: 500px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vue-post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vue-post-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.vue-profile-pic {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.vue-date {
  font-size: 12px;
  color: #555;
}

.vue-post-image {
  width: 100%;
  border-radius: 6px;
}

.vue-post-caption {
  font-size: 14px;
  margin-top: 6px;
  color: #333;
}

.vue-post-footer {
  margin-top: 8px;
}

.vue-like-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

</style>