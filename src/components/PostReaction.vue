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
         :class="[isLiked ? 'active' : null, !config.enable?.dislikes ? 'important clickable' : null]"
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
        {{ config.enable?.dislikes ? 'thumb_up' : 'favorite' }}
      </span>
      <p>{{ likes }}</p>
    </div>

    <!-- Like & dislikes amount -->
    <div v-show="config.enable?.likes && config.enable?.dislikes"
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
         :class="[isDisliked ? 'active' : null, !config.enable?.likes ? 'important clickable' : null]"
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
        {{ config.enable?.likes ? 'thumb_down' : 'heart_broken' }}
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

// Standard object for values of the number of set reactions
const defaultAmountProps = {
  type: Number,
  default(rawProps) {
    return 0;
  }
}

// Standard object for values whether like or dislike is set
const defaultBooleanProps = {
  type: Boolean,
  default(rawProps) {
    return false;
  }
}

export default {
  // props: ['likes', 'dislikes', 'views', 'comments', 'isLiked', 'isDisliked'],
  props: {
    likes: defaultAmountProps,
    dislikes: defaultAmountProps,
    views: defaultAmountProps,
    comments: defaultAmountProps,
    isLiked: defaultBooleanProps,
    isDisliked: defaultBooleanProps,
  },
  created() {
    this.getActionsConfig();
  },
  data() {
    return {
      config: {},
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
