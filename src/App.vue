<template>

  <div id="posts">
    <post v-for="(post, index) in posts"
          :title="post.title"
          :content="post.content"
          :key="index"
          :reactions-amount="post.reactions"
    ></post>
  </div>

</template>

<style lang="scss">
  @import "@/assets/stylesheet/app";
</style>



<script>
  import Post from "@/components/Post.vue";

  export default {
    components: {Post},
    data() {
      return {
        posts: [
          {
            reactions: {likes: 34, dislikes: 6, views: 1783, comments: 11},
            content: 'Why don\'t we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!',
          },
          {
            reactions: {likes: 10, dislikes: 0, views: 245, comments: 0},
            title: 'Embracing the Future: The Rise of Quantum Computing in Programming',
            content: `In the evolving landscape of technology, the advent of quantum computing presents a seismic shift in programming paradigms, heralding a future where problems once deemed intractable become solvable. This leap forward is not merely an incremental improvement but a redefinition of what computers can do.

            Quantum computing operates on the principles of quantum mechanics, leveraging the peculiar behavior of quantum bits (qubits) to perform calculations at speeds unattainable by classical computers. Unlike traditional bits that exist as either 0 or 1, qubits can exist in multiple states simultaneously, thanks to superposition. Moreover, through a phenomenon known as entanglement, qubits can be correlated with each other, meaning the state of one (no matter how far apart) can depend on the state of another.`
          },
          {
            reactions: {likes: 12, dislikes: 6, views: 377, comments: 32},
            content: 'As tensions escalate globally, the recent summit has highlighted the urgent need for diplomacy in addressing climate change. Leaders from around the world convened to discuss actionable strategies, emphasizing the necessity of unified efforts to combat this pressing issue. The summit\'s focus on innovative technologies and renewable energy investments marks a pivotal step toward a sustainable future, urging nations to prioritize environmental health over geopolitical divides.'
          },
        ],
        moreMenu: -1,
      };
    },
  }

</script>