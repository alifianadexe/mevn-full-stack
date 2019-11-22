<template>
  <div class="posts">
    <h1>Add Post</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="TITLE" v-model="title" />
      </div>
      <div>
        <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="addPost">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";

export default {
  name: "addpost",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    async addPost() {
      await PostsService.addPost({
        title: this.title,
        description: this.description
      });
      this.$swal("Great", "Your post has been added!", "success");
      this.$router.push({
        name: "Posts"
      });
    }
  }
};
</script>