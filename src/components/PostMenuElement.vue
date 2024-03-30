<template>
  <a href="#" @click.prevent="method">
    <li :class="alert">
          <span class="material-symbols-outlined">
            {{ icon }}
          </span>
        {{ text }}
    </li>
  </a>
</template>

<script>

export default {
  props: ['text', 'icon', 'method', 'alert']
}

</script>