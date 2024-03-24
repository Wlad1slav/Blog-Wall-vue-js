<template>

  <div id="posts">
    <post-write @post-create="postCreate"></post-write>

    <post v-if="posts.length > 0"
          v-for="(post, index) in getPosts"
          :title="post.title"
          :content="post.content"
          :key="index"
          :reactions="post.reactions"
          :date-time-create="post.date"
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
        // Sorting of all posts by creation date
        return [...this.posts].sort(function(a, b) {
          // Convert the date strings to Date objects
          let dateA = new Date(a.date);
          let dateB = new Date(b.date);

          // Subtract the dates to get a value that is either negative, positive, or zero
          return dateB - dateA;
        });

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
        const currentDate = new Date().toLocaleString(this.$config.dateFormat.locales, this.$config.dateFormat);
        this.posts.push({
          content: postObj,
          date: currentDate
        });
      }

    }
  }

</script>