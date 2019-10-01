<template>
  <div class="feed-list" :class="{ 'feed-list__selected': !!selected }">
    <h2 class="heading">Trending Now</h2>
    <ul>
      <li v-for="(feed, i) in feeds" :key="feed.id">
        <feed
          :feed="feed"
          :selected="selected && feeds.indexOf(selected.feed) >= i"
          @select="selectFeed"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Feed from './Feed.vue'
export default {
  components: {
    Feed
  },
  computed: {
    ...mapState(['feeds', 'selected'])
  },
  methods: {
    ...mapMutations(['selectFeed'])
  }
}
</script>

<style lang="scss">
.feed-list {
  padding-top: 88px;
  > ul > li {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  .heading {
    opacity: 1;
  }
}
.feed-list__selected {
  > ul > li {
    transition: all 0.6s ease;
    transform: translate3d(0, 100%, 0);
    opacity: 0;

    &:nth-child(1) {
      transition-delay: 300ms;
    }
    &:nth-child(2) {
      transition-delay: 200ms;
    }
    &:nth-child(3) {
      transition-delay: 100ms;
    }
  }
  .heading {
    transition: all 0.6s ease;
    opacity: 0;
  }
}
</style>
