<template>
  <stat class="stat-chart" :title="title" :subtitle="sub" :axis="axis">
    <div class="stat-chart_body">
      <svg ref="chart">
        <linearGradient y1="0" x1="0" y2="1" x2="0" id="gradient">
          <stop stop-color="#5116d0" offset="0" stop-opacity="0.5"></stop>
          <stop stop-color="#5116d0" offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <path class="stat-chart_bg" ref="bg"></path>
        <path class="stat-chart_path" ref="path"></path>
      </svg>
    </div>
  </stat>
</template>

<script>
import Stat from './Stat.vue'
import { renderBezierCurve } from '../helper/svg-chart'
import { MONTH_AXIS } from '../share'
export default {
  components: {
    Stat
  },
  props: {
    title: {
      type: String
    },
    points: {
      type: Array
    },
    max: {
      type: Number
    }
  },
  data () {
    return {
      sub: 'Last 6 Month',
      axis: MONTH_AXIS
    }
  },
  computed: {
    vals () {
      return this.points.map(val => {
        return 80 - Math.round((val / this.max) * 80)
      })
    }
  },
  mounted () {
    const c = this.$refs.chart
    const w = c.scrollWidth
    const h = c.scrollHeight
    const s = w / 6
    const points = [
      [-1 * s + s / 2, h],
      ...this.vals.map((p, i) => {
        return [i * s + s / 2, p]
      }),
      [6 * s + s / 2, h]
    ]
    const curve = renderBezierCurve(points)
    this.$refs.path.setAttribute('d', `M ${points[0]} ${curve}`)
    this.$refs.bg.setAttribute('d', `M 0,${h} ${curve} L ${w},${h}`)
  }
}
</script>

<style lang="scss">
.stat-chart {
  svg {
    width: 100%;
    height: 80px;
  }
}
.stat-chart_bg {
  stroke: none;
  fill: url(#gradient);
}
.stat-chart_path {
  stroke: #5116d0;
  stroke-dasharray: 500 500;
  fill: none;
  stroke-width: 2;
  stroke-linejoin: miter;
  animation: path2 2s ease reverse;
}
</style>
