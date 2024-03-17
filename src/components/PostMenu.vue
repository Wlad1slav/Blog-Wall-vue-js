<template>

  <div class="more" @pointerleave="activeMenu = false">
    <span class="material-symbols-outlined hover-icon" @pointerenter="activeMenu = true">
      more_horiz
    </span>
    <ul :class="{hidden: !activeMenu}">
      <li>
        <a href="#">Pin</a>
      </li>
      <li>
        <a href="#">Edit</a>
      </li>
      <li class="warn">
        <a href="#">Hide</a>
      </li>
      <li class="danger">
        <a href="#">Delete</a>
      </li>
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