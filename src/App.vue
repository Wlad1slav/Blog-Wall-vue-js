<template>

  <post title="Tile" content="TEST" key="1"></post>

</template>

<style lang="scss">
  @import "@/assets/stylesheet/app";
</style>



<script>
  import Post from "@/components/Post.vue";

  export default {
    components: {Post},
    data() {
      return {
        posts: [
          {title: 'post1', content: 'blablabla'},
          {title: 'post2', content: 'blablabla'},
          {title: 'post3', content: 'blablabla'},
        ],
        moreMenu: -1,
      };
    },
  }

</script>