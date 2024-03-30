<template>

  <div class="more" @pointerleave="activeMenu = false">
    <span class="material-symbols-outlined hover-icon" @pointerenter="activeMenu = true">
      more_horiz
    </span>
    <ul :class="{hidden: !activeMenu}">
      <post-menu-element
          :text="!isPinned ? 'Pin' : 'Unpin'"
          icon="keep_public"
          :method="pin"
      ></post-menu-element>
      <post-menu-element
          text="Edit"
          icon="edit"
      ></post-menu-element>
      <post-menu-element
          text="Hide"
          icon="hide_image"
          alert="warn"
      ></post-menu-element>
      <post-menu-element
          text="Delete"
          icon="delete_forever"
          :method="removeConfirmation"
          alert="danger"
      ></post-menu-element>
    </ul>
  </div>

</template>

<script>

import {mapMutations} from "vuex";

import PostMenuElement from "@/components/PostMenuElement.vue";

  export default {
    components: {PostMenuElement},
    props: ['postId', 'isPinned'],

    data() {
      return {
        activeMenu: false,
      }
    },

    methods: {
      ...mapMutations(['removePost', 'pinPost']),

      removeConfirmation() {

        // Confirmation
        let confirmation = confirm('Are you sure you want to delete this post? This action cannot be undone.')

        if (confirmation) {
          // Remove action
          this.removePost(this.postId);
        }

      },

      pin() {
        // Pins a specific post from above
        this.pinPost(this.postId);
      }
    }
  }

</script>