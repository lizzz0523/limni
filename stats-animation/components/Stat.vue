<template>
  <div class="stat">
    <h4 class="stat_title">{{ title }}</h4>
    <p class="stat_subtitle">{{ subtitle }}</p>
    <slot></slot>
    <div class="stat_axis">
      <span v-for="(ax, i) in axis" :key="i">{{ ax }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    axis: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
.stat {
  margin: 0 20px 10px;
  padding: 16px 0;
  border-radius: 10px;
  background-color: white;
}
.stat_title {
  padding: 0 16px;
  font-weight: 900;
  font-size: 18px;
}
.stat_subtitle {
  margin-top: 4px;
  padding: 0 16px;
  color: #999;
  font-weight: 600;
  font-size: 14px;
}
.stat_axis {
  display: flex;
  justify-content: space-around;
  margin-top: 4px;
  color: #999;
  font-size: 12px;
}
</style>
