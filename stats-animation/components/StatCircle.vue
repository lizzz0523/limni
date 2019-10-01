<template>
  <stat class="stat-circle" :title="`${day} / 7`" :subtitle="sub" :axis="axis">
    <div class="stat-circle_body">
      <svg
        v-for="(v, i) in vals"
        :class="{ 'stat-circle_done': v === 95 }"
        :key="i"
      >
        <circle class="stat-circle_bg" />
        <circle class="stat-circle_path" :stroke-dasharray="`${v},95`" />
        <path class="stat-circle_mark" d="M 17,10 L 12,14 L 20,24"></path>
      </svg>
    </div>
  </stat>
</template>

<script>
import Stat from './Stat.vue'
import { WEEK_AXIS } from '../share'
export default {
  components: {
    Stat
  },
  props: {
    points: {
      type: Array
    },
    max: {
      type: Number
    }
  },
  data () {
    const day = new Date().getDay()
    return {
      day: day || 7,
      sub: 'Last Week',
      axis: WEEK_AXIS
    }
  },
  computed: {
    vals () {
      return this.points.map(val => {
        return Math.round((val / this.max) * 95)
      })
    }
  }
}
</script>

<style lang="scss">
.stat-circle {
  svg {
    height: 34px;
    width: 34px;
    transform: rotate(90deg) scale(-1, -1);
    path {
      opacity: 0;
    }
  }
}
.stat-circle_body {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}
.stat-circle_done {
  .stat-circle_path {
    stroke: #16d0a0;
  }
  .stat-circle_mark {
    stroke: #16d0a0;
    opacity: 1;
  }
}
.stat-circle_bg {
  cx: 17;
  cy: 17;
  r: 15;
  stroke: #efefef;
  stroke-width: 2;
  fill: none;
}
.stat-circle_path {
  cx: 17;
  cy: 17;
  r: 15;
  stroke: #5116d0;
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
  animation: path 2s ease reverse;
}
.stat-circle_mark {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
