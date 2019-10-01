<template>
  <div class="feed-stat">
    <h3 class="heading">Daily goals</h3>
    <stat-circle :points="feed.goal" :max="100" />
    <h3 class="heading">Used focus</h3>
    <stat-chart :title="`${totalUsed}`" :points="feed.used" :max="500" />
    <h3 class="heading">Time spent</h3>
    <stat-chart :title="`${totalTime} Hours`" :points="feed.time" :max="100" />
  </div>
</template>

<script>
import StatCircle from './StatCircle.vue'
import StatChart from './StatChart.vue'
export default {
  components: {
    StatCircle,
    StatChart
  },
  props: {
    feed: {
      type: Object,
      required: true
    }
  },
  computed: {
    totalTime () {
      return this.feed.time.reduce((a, v) => a + v, 0)
    },
    totalUsed () {
      return this.feed.used.reduce((a, v) => a + v, 0)
    }
  }
}
</script>

<style lang="scss">
.feed-stat {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 88px;
  perspective: 1900px;

  .stat {
    opacity: 0;
    transform: translate3d(0, 50px, 0) rotateX(-90deg);
    transform-origin: bottom;
    transform-style: preserve-3d;
    animation: flip 0.6s 0.4s ease-out forwards;
  }
  .heading {
    opacity: 0;
    animation: fade 0.6s 0.8s ease-out forwards;
  }
}
</style>
