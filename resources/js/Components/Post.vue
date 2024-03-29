<template>
  <div class="post" :key="id">

    <p class="date">{{ dateConvert() }}</p>
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>

    <post-menu :post-id="id"></post-menu>

    <post-reaction
        :likes="reactions?.amounts.likes"
        :dislikes="reactions?.amounts.dislikes"
        :views="reactions?.amounts.views"
        :comments="reactions?.amounts.comments"
        :is-liked="reactions?.reacted.isLiked"
        :is-disliked="reactions?.reacted.isDisliked"
    ></post-reaction>

  </div>
</template>

<style lang="scss">
  @import "../assets/stylesheet/post";
</style>

<script>

  import PostMenu from "./PostMenu.vue";
  import PostReaction from "./PostReaction.vue";

  export default {
    components: {PostMenu, PostReaction},
    props: {
      title: {
        type: String,
      },
      content: {
        type: String,
      },
      index: {
        type: Number,
      },
      reactions: {
        type: Object,
      },
      dateTimeCreate: {
        type: String,
      },
      id: {
        type: Number,
      },
    },
    methods: {
        dateConvert() {
            return new Date(this.dateTimeCreate).toLocaleString(this.$config.dateFormat.locales, this.$config.dateFormat);
        }
    },
  }

</script>
