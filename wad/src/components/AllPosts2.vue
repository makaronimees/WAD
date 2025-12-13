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
import { mapGetters } from "vuex";
import PostCard from "./PostCard.vue";

export default {
  name: "AllPosts",

  components: {
    PostCard
  },

  computed: {
    ...mapGetters(["allPosts"]),
    posts() {
      return this.allPosts;
    }
  }
};
</script>