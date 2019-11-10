<template>
  <div class="mine">
    <span
      class="mine_face"
      :style="{ backgroundImage: `url(${mine.faceUrl})` }"
    />
    <span class="mine_name">Your Story</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['mine'])
  }
}
</script>

<style lang="scss">
.mine_face {
  position: relative;
  display: block;
  width: 44px;
  height: 44px;
  border: 2px solid white;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
}
.mine_face::after {
  content: '\f055';
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: white;
  font: normal normal normal 14px/1 FontAwesome;
}
.mine_name {
  display: block;
  margin: 0 -10px;
  padding-top: 8px;
  width: 68px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #999;
}
</style>
