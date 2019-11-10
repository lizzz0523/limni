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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-top: 20px;
  height: 68px;
  background-color: white;
  font-size: 15px;
  z-index: 10;

  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
    height: 26px;
    font-size: 0;
    background-image: url(../assets/instagram-logo.jpg);
    background-size: 40%;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  span {
    padding: 0 20px;
  }
}
</style>
