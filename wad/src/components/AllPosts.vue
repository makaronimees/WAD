<template>
    <div class="item" v-for="post in posts" :key="post.id">
        <div class="post-card">
            <div class="post-header">
                <div class="post-header-left">
                    <img :src="post.profilePicture" alt="Profile picture" class="profile-pic">
                    {{ post.authorName }}
                </div>
                <span class="date">{{ post.date }}</span>
            </div>
            {{post.postImageHtml}}
            <div class="post-caption">{{post.postCaption}}</div>
            <div class="post-footer">{{post.postFooter}}</div>
        </div>
    </div>
</template>
<Post/>

<script>
import Post from './Post.vue';

export default {
    name: "AllPosts",
    components: {
        Post,
    },
    data () { return {posts: [],};},
    methods: {
        fetchPosts() {
            fetch('http://localhost:3000/posts/')
            .then ((response) => response.json())
            .then ((data) => (this.posts = data))
            .catch ((err) => console.log(err.message));
        },
    },
    mounted() {
        this.fetchPosts();
    },
};

</script>