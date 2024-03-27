<template>

  <div class="more" @pointerleave="activeMenu = false">
    <span class="material-symbols-outlined hover-icon" @pointerenter="activeMenu = true">
      more_horiz
    </span>
    <ul :class="{hidden: !activeMenu}">
      <a href="#">
        <li>Pin</li>
      </a>
      <a href="#">
        <li>Edit</li>
      </a>
      <a href="#">
        <li class="warn">Hide</li>
      </a>
      <a href="#" @click.prevent="removeConfirmation">
        <li class="danger">Delete</li>
      </a>
    </ul>
  </div>

</template>

<script>

import {mapMutations, mapState} from "vuex";

  export default {
    props: ['postId'],

    data() {
      return {
        activeMenu: false,
      }
    },

    computed: {
      ...mapState(['posts'])
    },

    methods: {
      ...mapMutations(['removePost']),

      removeConfirmation() {

        // Confirmation
        let confirmation = confirm('Are you sure you want to delete this post? This action cannot be undone.')

        if (confirmation) {
          // Remove action
          this.removePost(this.postId);
        }

      }
    }
  }

</script>