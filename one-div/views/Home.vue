<template>
  <div class="home">
    <div><circle-loading /></div>
    <div><bubble-loading /></div>
    <div><teacup-loading /></div>
    <div><play-button /></div>
    <div><floating-button /></div>
    <div><progress-bar /></div>
    <div><badge /></div>
    <div><heart /></div>
    <div><land-mark /></div>
    <div><mail /></div>
    <div><calendar /></div>
    <div><vue /></div>
  </div>
</template>

<script>
import CircleLoading from '../components/CircleLoading.vue'
import BubbleLoading from '../components/BubbleLoading.vue'
import TeacupLoading from '../components/TeacupLoading.vue'
import PlayButton from '../components/PlayButton.vue'
import FloatingButton from '../components/FloatingButton.vue'
import ProgressBar from '../components/ProgressBar.vue'
import Badge from '../components/Badge.vue'
import Heart from '../components/Heart.vue'
import LandMark from '../components/LandMark.vue'
import Mail from '../components/Mail.vue'
import Calendar from '../components/Calendar.vue'
import Vue from '../components/Vue.vue'

export default {
  components: {
    CircleLoading,
    BubbleLoading,
    TeacupLoading,
    PlayButton,
    FloatingButton,
    ProgressBar,
    Badge,
    Heart,
    LandMark,
    Mail,
    Calendar,
    Vue
  }
}
</script>

<style>
.home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100vh;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}
.home > div {
  transform: scale(1.5);
}
</style>
