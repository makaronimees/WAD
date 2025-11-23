import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      posts: []
    }
  },

  getters: {
    allPosts(state) {
      return state.posts;
    }
  },

  mutations: {
  setPosts(state, posts) {
    state.posts = posts.map(p => ({
      ...p,
      likes: p.likes ?? 0
    }));
    },
    
  incrementLikes(state, postId) {
    const post = state.posts.find(p => p.id === postId);
    if (post) post.likes++;
  },

  resetLikes(state) {
    state.posts = state.posts.map(post => ({
      ...post,
      likes: 0
    }));
  }
},

  actions: {
    async fetchPosts({ commit }) {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      commit("setPosts", data); 
    }
  }
});