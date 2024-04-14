<template>
  <div class="post" :key="id">

    <!-- Show if a post is pinned -->
    <p class="pin-text" v-if="pinned">
    <span class="material-symbols-outlined mb12">
      keep_public
    </span>
        Pinned
    </p>

    <p class="date">{{ dateConvert() }}</p>
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>

    <post-menu :post-id="id" :is-pinned="pinned"></post-menu>

    <post-reaction
        :post-id="id"
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
      pinned: {
          type: Number, // Boolean cannot be used because the database returns all Boolean values as numeric 0/1
      },
    },
    methods: {
        dateConvert() {
            return new Date(this.dateTimeCreate).toLocaleString(this.$config.dateFormat.locales, this.$config.dateFormat);
        }
    },
  }

</script>
