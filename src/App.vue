<template>

  <div id="posts">
    <post-write></post-write>

    <post v-if="posts.length > 0"
          v-for="(post, index) in posts"
          :title="post.title"
          :content="post.content"
          :key="index"
          :id="index"
          :reactions="post.reactions"
          :date-time-create="post.date"
          :is-pinned="post.isPinned"
    ></post>
  </div>

</template>


<style lang="scss">
  @import "@/assets/stylesheet/app";
</style>


<script>
import {mapState} from 'vuex';

import Post from "@/components/Post.vue";
import PostWrite from "@/components/PostWrite.vue";

export default {
    components: {Post, PostWrite},
    computed: {
      ...mapState(['posts']), // Vuex state variable from storePost
    },
  }

</script>