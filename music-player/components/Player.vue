<template>
  <div class="player">
    <div class="player_disk">
      <disk />
    </div>
    <div class="player_control">
      <control />
    </div>
    <div class="player_progress">
      <progress-bar />
    </div>
  </div>
</template>

<script>
import Disk from './Disk.vue'
import Control from './Control.vue'
import ProgressBar from './ProgressBar.vue'
export default {
  components: {
    Disk,
    Control,
    ProgressBar
  }
}
</script>

<style lang="scss">
.player {
  position: relative;
  display: flex;
  max-width: 300px;
  max-height: 75px;
  width: 300px;
  height: 75px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12),
    0 20px 20px rgba(95, 23, 101, 0.2);
}
.player_disk {
  flex: 1.2;
  padding: 12px;
}
.player_control {
  flex: 2;
  padding: 12px 0;
  padding-right: 12px;
}
.player_progress {
  position: absolute;
  left: 9px;
  right: 9px;
  top: 0;
  bottom: 25px;
  z-index: -1;
}
</style>
