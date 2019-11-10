<template>
  <div class="friend-list-scroll">
    <div class="friend-list">
      <ul :style="{ width: `${(friends.length + 1) * 71}px` }">
        <li>
          <mine />
        </li>
        <li v-for="friend in friends" :key="friend.id">
          <friend :friend="friend" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Mine from './Mine.vue'
import Friend from './Friend.vue'
export default {
  components: {
    Mine,
    Friend
  },
  computed: {
    ...mapState(['friends'])
  }
}
</script>

<style lang="scss">
.friend-list-scroll {
  position: relative;
  padding-top: 8px;
  height: 95px;
  overflow: hidden;
  background-color: white;
}
.friend-list-scroll::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -40vw;
  height: 0;
  width: 0;
  border: 40vw solid transparent;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
}
.friend-list {
  padding-top: 2px;
  padding-bottom: 32px;
  overflow-x: auto;
}
.friend-list ul {
  display: flex;
}
.friend-list li {
  padding-left: 20px;
  padding-right: 3px;
}
</style>
