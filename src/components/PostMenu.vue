<template>

  <div class="more" @pointerleave="activeMenu = false">
    <span class="material-symbols-outlined hover-icon" @pointerenter="activeMenu = true">
      more_horiz
    </span>
    <ul :class="{hidden: !activeMenu}">
      <a href="#" @click.prevent="pin">
        <li>
          <span class="material-symbols-outlined">
            keep_public
          </span>
          {{ !isPinned ? 'Pin' : 'Unpin' }}
        </li>
      </a>
      <a href="#">
        <li>
          <span class="material-symbols-outlined">
            edit
          </span>
          Edit
        </li>
      </a>
      <a href="#">
        <li class="warn">
          <span class="material-symbols-outlined">
            hide_image
          </span>
          Hide
        </li>
      </a>
      <a href="#" @click.prevent="removeConfirmation">
        <li class="danger">
          <span class="material-symbols-outlined">
            delete_forever
          </span>
          Delete
        </li>
      </a>
    </ul>
  </div>

</template>

<script>

import {mapMutations} from "vuex";

  export default {
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