<template>
  <div class="post" :key="index">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <post-menu></post-menu>
  </div>
</template>

<style lang="scss">
  @import "@/assets/stylesheet/post";
</style>

<script>

  import PostMenu from "@/components/PostMenu.vue";

  export default {
    components: {PostMenu},
    props: ['title', 'content', 'index'],
  }

</script>