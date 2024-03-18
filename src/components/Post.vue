<template>
  <div class="post" :key="index">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <post-menu></post-menu>
    <post-reaction
        :likes="reactions.amounts.likes"
        :dislikes="reactions.amounts.dislikes"
        :views="reactions.amounts.views"
        :comments="reactions.amounts.comments"
        :is-liked="reactions.reacted.isLiked"
        :is-disliked="reactions.reacted.isDisliked "
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
    props: ['title', 'content', 'index', 'reactions'],
    // data() {
    //   return {
    //     isLiked: false,
    //     isDisliked: false,
    //   };
    // }
  }

</script>