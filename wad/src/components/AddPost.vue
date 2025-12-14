<template>
    <div class="form">
        <h3>Add a Post</h3>
        <label for="title">Body: </label>
        <input name="title" type="text" id="postcaption" required v-model="postcaption" placeholder="Post body.." />
        <button @click="addPost" class="addPost">Add Post</button>
</div>
</template>
<script>
export default {
    name: "AddPost",
        data() {return { post: {authorName: "", postCaption: "",date: "", }, }; },
    methods: {
        addPost() {
            // Get logged-in user
            const user = JSON.parse(localStorage.getItem('user'));
            this.post.authorName = user ? user.email : '';
            
            // Get current date
            var currentDate = new Date();
            var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var day=currentDate.getDate();
            var month=months[currentDate.getMonth()];
            var year = currentDate.getFullYear();
            this.post.date = month + " " + day + ", " + year;
            var postcaption = document.getElementById("postcaption").value
            var data = {authorname: this.post.authorName,postcaption: postcaption, date: this.post.date};
            fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {"Content-Type": "application/json", },
                body: JSON.stringify(data)})
            .then((response) => {console.log(response.data);
            this.$router.push("/"); })
            .catch((e) => {console.log(e);
            console.log("error");});}
            }
            };
</script>
<style>

</style>