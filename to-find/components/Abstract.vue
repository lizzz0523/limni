<template>
  <div class="abstract">
    <ul class="abstract_face">
      <li
        v-for="post in posts"
        :key="post.id"
        :style="{ backgroundImage: `url(${post.faceUrl})` }"
      />
    </ul>
    <div class="abstract_menu">
      <i class="fa fa-ellipsis-v"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
.abstract {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 6px;
}
.abstract_face {
  padding: 0 16px;
  opacity: 1;
  transition: all 0.6s ease;

  li {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-size: cover;
    background-position: 0px 2px;
    margin-left: -16px;
    vertical-align: top;
  }
}
.abstract_menu {
  color: #ddd;
}
</style>
