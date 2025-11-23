const store = Vuex.createStore({
    state() {
        return {
            posts: []
        };
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        async loadPosts({ commit }) {
            const res = await fetch("posts.json");
            const data = await res.json();
            commit("setPosts", data);
        }
    },
    getters: {
        allPosts(state) {
            return state.posts;
        }
    }
});