<template>
  <div class="friend">
    <span
      class="friend_face"
      :style="{ backgroundImage: `url(${friend.faceUrl})` }"
    />
    <span class="friend_name">{{ friend.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    friend: Object
  }
}
</script>

<style lang="scss">
.friend {
  position: relative;
  z-index: 2;
}
.friend_face {
  position: relative;
  display: block;
  width: 44px;
  height: 44px;
  border: 2px solid white;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
}
.friend_face::before {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  top: -4px;
  bottom: -4px;
  z-index: -1;
  border-radius: 100%;
  background-image: linear-gradient(-10deg, #ff9900, #bb0282 60%);
}
.friend_name {
  display: block;
  padding-top: 8px;
  width: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
}
</style>
