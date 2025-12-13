<template>
    <div class="form">
        <h3>Add a Post</h3>
        <label for="title">Caption: </label>
        <input name="title" type="text" id="postcaption" required v-model="postcaption" />
        <button @click="addPost" class="addPost">Add Post</button>
</div>
</template>
<script>
export default {
    name: "AddPost",
        data() {return { post: {authorName: "Kriset", date: "", profilePicture: "https://raw.githubusercontent.com/makaronimees/WAD/main/res/images/pfp.png", postCaption: "testing" }, }; },
    methods: {
        addPost() {
            var postcaption = document.getElementById("postcaption").value
            var data = {authorname: this.post.authorName, date: this.post.date, profilepicture: this.post.profilePicture, postcaption: postcaption, postimagehtml: this.post.postpicture};
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