<template>
<div class="A Post">
    <div id="form">
    <h3>A Post</h3>
    <p> Post body: {{ post.postcaption }}</p>
    <label for="body">Edit body: </label>
    <input name="body" type="text" id="postcaption" required v-model="postcaption" placeholder="New post body.." />
</div> 
<div>
    <button @click="updatePost" class="updatePost">Update</button>
    <button @click="deletePost" class="deletePost">Delete</button>
</div>
</div>
</template>
<script>

export default {
    name: "APost",
    data() {return {post: {id: "", authorname: "",  postcaption: "", date: "", }, }; },
    methods: {
        fetchAPost(id) {
            fetch(`http://localhost:3000/api/posts/${id}`)
            .then((response) => response.json())
            .then((data) => (this.post = data))
            .catch((err) => console.log(err.message));},
        
        updatePost() {
            
            this.post.postcaption = document.getElementById("postcaption").value;
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                method: "PUT", headers: { "Content-Type": "application/json", },
                body: JSON.stringify(this.post),})
            .then((response) => {console.log(response.data);
            this.$router.push("/");})
            .catch((e) => {console.log(e); });},
        deletePost() {
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                method: "DELETE", headers: {"Content-Type": "application/json"},})
            .then((response) => {console.log(response.data);
            this.$router.push("/");})
            .catch((e) => {console.log(e); }); },},
        mounted() { this.fetchAPost(this.$route.params.id);},};
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
    margin: auto;
    margin-top: 20px;
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