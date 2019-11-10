<template>
  <div class="feed-list">
    <ul>
      <li v-for="feed in feeds" :key="feed.id">
        <feed :feed="feed" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Feed from './Feed.vue'
export default {
  components: {
    Feed
  },
  computed: {
    ...mapState(['feeds'])
  }
}
</script>
