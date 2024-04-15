<template>


  <div class="post--reactions" v-show="$configReactions.enable?.actions">

    <!-- Views amount -->
    <div class="reaction" v-show="$configReactions.enable?.views">
      <span class="material-symbols-outlined">
        bar_chart
      </span>
      <p>{{ views }}</p>
    </div>

    <!-- Like reaction -->
    <div v-show="$configReactions.enable?.likes"
         class="reaction"
         :class="[reactions.isLiked ? 'active' : null, !$configReactions.enable?.dislikes ? 'important clickable' : null]"
         @click="handleReactPost('Like')"> <!-- react - model -->

      <span class="material-symbols-outlined" :class="reactions.isLiked ? 'yo-yo' : null">
        {{ $configReactions.enable?.dislikes ? 'thumb_up' : 'favorite' }}
      </span>
      <p>{{ reactions.likes }}</p>
    </div>

    <!-- Like & dislikes amount -->
    <div v-show="$configReactions.enable?.likes && $configReactions.enable?.dislikes"
         class="reaction important"
         :class="reactions.isLiked || reactions.isDisliked ? 'active' : null">
      <span class="material-symbols-outlined">
        {{ reactions.isDisliked ? 'heart_broken' : 'favorite' }}
      </span>
      <p>{{ reactions.likes - reactions.dislikes }}</p>
    </div>

    <!-- Dislike reaction -->
    <div v-show="$configReactions.enable?.dislikes"
         class="reaction"
         :class="[reactions.isDisliked ? 'active' : null, !$configReactions.enable?.likes ? 'important clickable' : null]"
         @click="handleReactPost('Dislike')"
    >
      <span class="material-symbols-outlined" :class="reactions.isDisliked ? 'yo-yo' : null">
        {{ $configReactions.enable?.likes ? 'thumb_down' : 'heart_broken' }}
      </span>
      <p>{{ reactions.dislikes }}</p>
    </div>

    <!-- Reviews amount -->
    <div v-show="$configReactions.enable?.comments"
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
import {mapActions, mapMutations} from "vuex";

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
    props: {
        postId: { type: Number },
        dislikes: defaultAmountProps,
        views: defaultAmountProps,
        comments: defaultAmountProps,
    },

    data() {
        return {
            reactions: this.postReactions(),
        }
    },

    methods: {
        ...mapActions(['reactionQuery', 'getReactions']),

        async handleReactPost(react) {
            // API request to like a post
            // Returns the new value of all reactions.
            this.reactions = await this.reactionQuery({postId: this.postId, model: react});
        },

        async postReactions() {
            // Query through the object with all reactions of the post
            this.reactions = await this.getReactions(this.postId);
        }
    },
}

</script>
