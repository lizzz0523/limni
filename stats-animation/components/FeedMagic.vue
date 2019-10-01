<template>
  <canvas class="feed-magic"></canvas>
</template>

<script>
import { createRenderer } from '../helper/wasm-canvas'
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    play: {
      type: Boolean
    }
  },
  watch: {
    play (val) {
      if (val) {
        this.$render && this.$render(true)
      }
    }
  },
  async mounted () {
    this.$render = await createRenderer(this.$el, this.url)
    this.$render()
    this.$emit('ready')
  }
}
</script>

<style lang="scss">
.feed-magic {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
