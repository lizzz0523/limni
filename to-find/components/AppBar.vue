<template>
  <div class="app-bar">
    <span class="app-bar_l" @click="$emit('left')">
      <i :class="['fa', `fa-${left}`]"></i>
    </span>
    <h1>{{ title }}</h1>
    <span class="app-bar_r" @click="$emit('right')">
      <i :class="['fa', `fa-${right}`]"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: 'chevron-left'
    },
    right: {
      type: String,
      default: 'ellipsis-v'
    }
  }
}
</script>

<style lang="scss">
.app-bar {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  height: 44px;
  padding-bottom: 20px;
  font-size: 15px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);

  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  span {
    padding: 0 20px;
  }
}
</style>
