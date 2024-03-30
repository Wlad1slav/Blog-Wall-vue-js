<template>
  <div class="post"
       :class="isPinned ? 'pinned' : null"
       :key="id"
  >

    <!-- Show if a post is pinned -->
    <p class="pin-text" v-if="isPinned">
      <span class="material-symbols-outlined mb12">
        keep_public
      </span>
      Pinned
    </p>

    <p class="date">{{ dateTimeCreate }}</p>
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>

    <post-menu :post-id="id" :is-pinned="isPinned"></post-menu>

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
  @import "@/assets/stylesheet/post";
</style>

<script>

  import PostMenu from "@/components/PostMenu.vue";
  import PostReaction from "@/components/PostReaction.vue";

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
      isPinned: {
        type: Boolean,
        default: false
      },
    }
  }

</script>