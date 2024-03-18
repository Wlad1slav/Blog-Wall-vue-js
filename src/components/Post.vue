<template>
  <div class="post" :key="index">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <post-menu></post-menu>
    <post-reaction
        :likes="reactionsAmount.likes"
        :dislikes="reactionsAmount.dislikes"
        :views="reactionsAmount.views"
        :comments="reactionsAmount.comments"
    ></post-reaction>
  </div>
</template>

<style lang="scss">
  @import "@/assets/stylesheet/post";
</style>

<script>

  import PostMenu from "@/components/PostMenu.vue";
  import PostReaction from "@/components/PostReaction.vue";

  export default {
    components: {PostMenu, PostReaction},
    props: ['title', 'content', 'index', 'reactionsAmount'],
  }

</script>