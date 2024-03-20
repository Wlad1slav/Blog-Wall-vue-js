<template>

  <div id="posts">
    <post-write></post-write>

    <post v-if="posts.length > 0"
          v-for="(post, index) in posts"
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
      this.getPosts();
    },
    data() {
      return {
        posts: [],
        moreMenu: -1,
      };
    },
    methods: {
      async getPosts() { // get all posts
        let posts = await fetch('posts.json');
        this.posts = await posts.json();
      }
    }
  }

</script>