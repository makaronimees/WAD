<template>
    <div class="form">
        <h3>Add a Post</h3>
        <label for="title">Title: </label>
        <input name="title" type="text" id="title" required v-model="post.title" />
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
        <label for="urllink">Url: </label>
        <input name="urllink" type="text" id="urllink" required v-model="post.urllink"/>
        <button @click="addPost" class="addPost">Add Post</button>
</div>
</template>
<script>
export default {
    name: "AddPost",
        data() {return { post: {title: "", body: "", urllink: "", }, }; },
    methods: {
        addPost() {
            var data = {title: this.post.title, body: this.post.body, urllink: this.post.urllink,};
            fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {"Content-Type": "application/json", },
                body: JSON.stringify(data)})
            .then((response) => {console.log(response.data);
            this.$router.push("/"); })
            .catch((e) => {console.log(e);
            console.log("error");});},},};
</script>
<style>

</style>