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
      <a href="#">
        <li class="danger">Delete</li>
      </a>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        activeMenu: false
      }
    },
  }

</script>