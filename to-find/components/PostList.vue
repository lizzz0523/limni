<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="post_avatar">
        <span
          class="post_face"
          :style="{ backgroundImage: `url(${post.faceUrl})` }"
        />
        <span class="post_name">{{ post.name }}</span>
        <span class="post_date">{{ post.date | dateString }}</span>
        <span class="post_like"><i class="fa fa-thumbs-o-up"></i></span>
      </div>
      <p class="post_content">{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array
    }
  },
  filters: {
    dateString (val) {
      return val
        .toDateString()
        .split(' ')
        .slice(1, 3)
        .join(' ')
    }
  }
}
</script>

<style lang="scss">
.post-list {
  padding: 0;
  transform-origin: top;
}
.post {
  padding: 16px 0;
  border-bottom: 1px solid #f9f9f9;
}
.post_avatar {
  padding: 0 24px;
  display: flex;
  align-items: center;
}
.post_face {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-image: url(../assets/face1.png);
  background-size: cover;
  background-position: 0px 2px;
}
.post_name,
.post_date {
  flex: 1;
  padding-left: 20px;
}
.post_name {
  color: #888;
}
.post_date,
.post_like {
  color: #ccc;
}
.post_content {
  padding: 8px 24px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
