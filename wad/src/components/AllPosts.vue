<template>
  <div class="all-posts">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  name: "AllPosts",

  components: {
    PostCard
  },
  data:  function() {
    return {
    posts:[ ],
    }
  },

  mounted() {
      fetch('http://localhost:3000/api/posts/')
      .then((response) => response.json())  
      .then((data) => (this.posts = data))
      .catch(err => console.log(err.message))
  }
};
</script>