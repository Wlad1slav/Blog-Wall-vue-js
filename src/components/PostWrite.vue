<template>

  <form class="post--write" :class="postContent.length > maxPostLength ? 'error' : null">

    <textarea v-model="postContent"
              placeholder="Here's what I think..."
              :style="postContent.length > 150 ? `height: ${postContent.length/1.9}px` : null"
    ></textarea>
    <div>
      <p class="characters-counter">{{ postContent.length }} / {{ maxPostLength }}</p>
      <button class="btn"
              :class="postContent.length > maxPostLength ? 'btn-dangerous' : 'btn-primary'"
              @click.prevent="validation()"
              :disabled="postContent.length === 0 || postContent.length > maxPostLength"
      >Send</button>
    </div>

  </form>

</template>


<style scoped lang="scss">

@import "@/assets/stylesheet/button";

</style>


<script>

import {mapMutations} from "vuex";

export default {

  data() {
    return {
      postContent: '',
      maxPostLength: 500,
    }
  },

  methods: {
    ...mapMutations(['addPost']),

    validation() { // validation of the form
      if (!this.postContent) {
        alert('Please fill the post input field.')
        return;
      }

      // Vuex action from storePost
      this.addPost(this.postContent);

      this.postContent = '';
    }
  }
}

</script>