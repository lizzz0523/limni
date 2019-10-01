<template>
  <div class="post">
    <div class="post_avatar">
      <div
        class="post_face"
        :style="{ backgroundImage: `url(${post.faceUrl})` }"
      />
      <p class="post_text">
        <em>{{ post.name }}</em>
        <span>{{ post.date | dateString }}</span>
      </p>
      <div class="post_add">
        <i class="fa fa-user-plus"></i>
      </div>
    </div>
    <p class="post_content">{{ post.content }}</p>
    <div class="post_action">
      <span><i class="fa fa-thumbs-up"></i></span>
      <span><i class="fa fa-comment"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
    dateString (val) {
      return val.toDateString()
    }
  }
}
</script>

<style lang="scss">
.post {
  position: relative;
  margin: 20px;
  padding: 20px;
  padding-bottom: 0;
  border-radius: 16px;
  background-color: white;
  transform-origin: top;
}
.post_avatar {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: -16px;
}
.post_face {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-size: cover;
}
.post_text {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
  line-height: 20px;

  i {
    color: #ffbe00;
  }
  em {
    font-weight: 600;
    font-size: 14px;
    text-align: left;
    color: #222;
  }
  span {
    font-size: 12px;
    color: #999;
  }
}
.post_add {
  padding: 16px;
  color: #aaa;
}
.post_content {
  margin-top: 20px;
  color: #999;
  font-size: 14px;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.post_action {
  display: flex;
  justify-content: flex-end;
  margin: 0 -16px;

  span {
    padding: 16px;
  }
}
</style>
