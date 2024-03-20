<template>


  <div class="post--reactions" v-show="config.enable?.actions">

    <!-- Views amount -->
    <div class="reaction" v-show="config.enable?.views">
      <span class="material-symbols-outlined">
        bar_chart
      </span>
      <p>{{ views }}</p>
    </div>

    <!-- Like reaction -->
    <div v-show="config.enable?.likes"
         class="reaction"
         :class="isLiked ? 'active' : null"
         @click="() => {
           if (!isLiked) {
              isLiked = true;
              likes++;
           } else {
              isLiked = false;
              likes--;
           }
           if (isDisliked) {
             isDisliked = false;
             dislikes--;
           }
         }"
    >
      <span class="material-symbols-outlined" :class="isLiked ? 'yo-yo' : null">
        thumb_up
      </span>
      <p>{{ likes }}</p>
    </div>

    <!-- Like & dislikes amount -->
    <div v-show="config.enable?.likes || config.enable?.dislikes"
         class="reaction important"
         :class="isLiked || isDisliked ? 'active' : null">
      <span class="material-symbols-outlined">
        {{ isDisliked ? 'heart_broken' : 'favorite' }}
      </span>
      <p>{{ likes-dislikes }}</p>
    </div>

    <!-- Dislike reaction -->
    <div v-show="config.enable?.dislikes"
         class="reaction"
         :class="isDisliked ? 'active' : null"
         @click="() => {
           if (!isDisliked) {
             isDisliked = true;
             dislikes++;
           } else {
             isDisliked = false;
             dislikes--;
           }
           if (isLiked) {
             isLiked = false;
             likes--;
           }
         }"
    >
      <span class="material-symbols-outlined" :class="isDisliked ? 'yo-yo' : null">
        thumb_down
      </span>
      <p>{{ dislikes }}</p>
    </div>

    <!-- Reviews amount -->
    <div v-show="config.enable?.comments"
         class="reaction">
      <span class="material-symbols-outlined">
        comment
      </span>
      <p>{{ comments }}</p>
    </div>

  </div>

</template>

<script>

export default {
  props: ['likes', 'dislikes', 'views', 'comments', 'isLiked', 'isDisliked'],
  created() {
    this.getActionsConfig();
  },
  data() {
    return {
      config: {}
    }
  },
  methods: {
    async getActionsConfig() {
      let config = await fetch('configActions.json');
      this.config = await config.json();
      console.log(this.config.enable.actions);
    }
  }
}

</script>
