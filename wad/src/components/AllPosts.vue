<template>
    <div class="all-posts">
        <div id="post-list">
            <h1>All Posts</h1>
            <ul>
                <div class="item" v-for="post in posts" :key="post.id">
                    <a class="singlepost" :href="'/api/APost/' + post.id" target="_blank">
                        <span class="title"> <b>Title:</b> {{ post.title }} </span><br />
                        <span class="body"> <b>Body:</b> {{ post.body }} </span> <br />
                        <span class="url"> <b>Url:</b> {{ post.urllink }} </span> <br />
                    </a>
                </div>
            </ul>
        </div>
       
    </div>
</template>
<script>

export default {
    name: "AllPosts",
    data() { return {posts:[],};},
    methods: {
        fetchPosts() {
            fetch(`http://localhost:3000/api/posts/`)
            .then((response) => response.json())
            .then((data) => (this.posts = data))
            .catch((err) => console.log(err.message));
        },
       
    
    },
    mounted() {
        this.fetchPosts();
        console.log("mounted");
    },};
</script>