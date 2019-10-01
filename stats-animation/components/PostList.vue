<template>
  <div class="post-list">
    <ul>
      <li
        v-for="(post, i) in posts"
        :key="post.id"
        :style="{ animationDelay: `${i * 100 + 500}ms` }"
      >
        <post :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: {
    Post
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.post-list {
  > ul > li {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    animation: rise 0.6s ease;
    animation-fill-mode: forwards;
  }
}
</style>
