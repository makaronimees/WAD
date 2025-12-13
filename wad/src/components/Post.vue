<template>

<div id="mjau">
<label for="title">authorName: </label>
<input name="type" type="text" id="author" required v-model="post.authorName" />
<label for="body">postCaption: </label>
<input name="body" type="text" id="caption" required v-model="post.postCaption" />
<label for="url">postFooter: </label>
<input name="url" type="text" id="footer" required v-model="post.postFooter" />
<label for="url">postImageHtml: </label>

</div> 

</template>

<script>
export default {
  name: "Post",
  data() {return {post: {id: "", authorName: "", postCaption: "", date: ""}, }; },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err.message));},
  mounted() { this.fetchAPost(this.$route.params.id);},}
}
</script>

<style>

.postText {
    height: 100px;
}

.newPost {
    text-align: left;
}

.newPost textarea {
    vertical-align: top;
}

.newPost button[type="submit"] {
    margin-left: 33%;
    margin-right: 30%;
}

.post-card{
    border-radius: 12px;
    background-color: #D9BBF9;
    width: 500px;
    padding: 8px;
    box-shadow: 0 2px 4 px rgba(0,0,0,0.15);
    overflow: hidden;
    margin: 30px;
}

.post1 ~ div .post-card {
    background-color: pink;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.post-header-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.profile-pic {
  width: 28px;
  height: 28px;
  background-color: #ccc;
  border-radius: 50%;
}
.date {
  font-size: 12px;
  color: #555;
}

.post-image {
  width: 100%;
  border-radius: 6px;
}


.post-caption {
  font-size: 14px;
  color: #333;
  margin: 6px 0;
}

.post-image + .post-caption {
  font-weight: bold;
  color: #000000;
}

.post-footer {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #555;
}

.like {
  font-size: 18px;
}

</style>
