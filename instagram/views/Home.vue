<template>
  <div class="home">
    <app-bar
      left="camera"
      right="paper-plane"
      title="Instagram"
      @left="toggleCamera"
    />
    <navigation />
    <friend-list />
    <feed-list />
    <bottom-tabs />
    <camera />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import AppBar from '../components/AppBar.vue'
import Navigation from '../components/Navigation.vue'
import FriendList from '../components/FriendList.vue'
import FeedList from '../components/FeedList.vue'
import BottomTabs from '../components/BottomTabs.vue'
import Camera from '../components/Camera.vue'
export default {
  components: {
    AppBar,
    Navigation,
    FriendList,
    FeedList,
    BottomTabs,
    Camera
  },
  methods: {
    ...mapMutations(['toggleCamera'])
  }
}
</script>

<style lang="scss">
.home {
  padding-top: 88px;
  padding-bottom: 88px;
  width: 100%;
  min-height: calc(100vh - 88px - 64px);
  overflow: hidden;
  background-color: white;
  color: #333;
}
</style>
