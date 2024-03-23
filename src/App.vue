<template>

  <div id="posts">
    <post-write @post-create="postCreate"></post-write>

    <post v-if="posts.length > 0"
          v-for="(post, index) in getPosts"
          :title="post.title"
          :content="post.content"
          :key="index"
          :reactions="post.reactions"
    ></post>
  </div>

</template>

<style lang="scss">
  @import "@/assets/stylesheet/app";
</style>



<script>
import Post from "@/components/Post.vue";
import PostWrite from "@/components/PostWrite.vue";

export default {
    components: {Post, PostWrite},
    created() { // before created
      this.loadPosts();
    },
    computed: {
      getPosts() {
        return [...this.posts].reverse();
      }
    },
    data() {
      return {
        posts: [],
      };
    },
    methods: {
      async loadPosts() { // get all posts
        let posts = await fetch('posts.json');
        this.posts = await posts.json();
      },
      postCreate(postObj) { // method that creates another post
        this.posts.push({
          content: postObj
        });
      }
    }
  }

</script>