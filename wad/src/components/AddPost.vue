<template>
    <div class="form">
        <h3>Add a Post</h3>
        <label for="title">Caption: </label>
        <input name="title" type="text" id="postcaption" required v-model="postcaption" />
    </div>
    <button @click="addPost" class="addPost">Add</button>

</template>
<script>
export default {
    name: "AddPost",
        data() {return { post: {authorName: "Kriset", date: "", profilePicture: "https://raw.githubusercontent.com/makaronimees/WAD/main/res/images/pfp.png", postCaption: "" }, }; },
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
form {
  text-align: center;
    background-color: rgb(219, 219, 219);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 30px;
    margin-bottom: 20px; 
}

button {
    background-color:lightsteelblue;
    color: black;
    border-radius: 5px;
    min-width: 100px;
    min-height: 30px;
    border-color:rgb(152, 169, 192);
    margin:30px;
}
form > p {
    color:black;
    text-align: left;
}
form > input {
    border-radius: 5px;
    border-color: lightsteelblue;
    min-height: 20px;
    color:gray;
    
}
</style>