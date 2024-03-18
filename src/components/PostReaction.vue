<template>

  <div class="post--reactions">

    <!-- Views amount -->
    <div class="reaction">
      <span class="material-symbols-outlined">
        bar_chart
      </span>
      <p>{{ views }}</p>
    </div>

    <!-- Like reaction -->
    <div class="reaction">
      <span class="material-symbols-outlined">
        thumb_up
      </span>
      <p>{{ likes }}</p>
    </div>

    <!-- Like & dislikes amount -->
    <div class="reaction important">
      <span class="material-symbols-outlined">
        favorite <!-- heart_broken -->
      </span>
      <p>{{ likes-dislikes }}</p>
    </div>

    <!-- Dislike reaction -->
    <div class="reaction">
      <span class="material-symbols-outlined">
        thumb_down
      </span>
      <p>{{ dislikes }}</p>
    </div>

    <!-- Reviews amount -->
    <div class="reaction">
      <span class="material-symbols-outlined">
        comment
      </span>
      <p>{{ comments }}</p>
    </div>

  </div>

</template>

<script>

export default {
  props: ['likes', 'dislikes', 'views', 'comments'],
}

</script>
