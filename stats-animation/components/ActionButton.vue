<template>
  <div class="action-button" @click="handleClick">
    <i :class="['fa', `fa-${icon}`]"></i>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['selected']),
    icon () {
      return this.selected ? 'chevron-left' : 'search'
    }
  },
  methods: {
    ...mapMutations(['unselectFeed']),
    handleClick () {
      if (this.selected) {
        this.unselectFeed()
      }
    }
  }
}
</script>

<style lang="scss">
.action-button {
  position: fixed;
  left: 30px;
  top: 32px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-color: #5116d0;
  color: white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
