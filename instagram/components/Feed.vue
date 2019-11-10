<template>
  <div class="feed">
    <div class="feed_image">
      <div class="feed_image_shadow" :style="shadowFilter" />
      <div class="feed_image_mask">
        <img :src="feed.imageUrl" :style="imageFilter" />
      </div>
    </div>
    <div class="feed_meta">
      <friend :friend="feed.author" />
    </div>
    <div class="feed_action">
      <span><i class="fa fa-heart-o"/></span>
      <span><i class="fa fa-bookmark-o"/></span>
      <span><i class="fa fa-tv"/></span>
      <span class="feed_action_gap" />
      <span><i class="fa fa-paper-plane-o"/></span>
    </div>
    <div class="feed_content">
      <p>
        <i class="fa fa-heart" />
        <span class="feed_content_text">{{ feed.like }} Likes</span>
      </p>
      <p>
        {{ feed.author.name }}
        <span class="feed_content_text" v-html="emphasizeContent" />
      </p>
    </div>
  </div>
</template>

<script>
import Friend from './Friend.vue'
import { filter } from '../shared'
export default {
  components: {
    Friend
  },
  props: {
    feed: Object
  },
  computed: {
    imageFilter () {
      return {
        filter: filter(this.feed.filter)
      }
    },
    shadowFilter () {
      return {
        filter: filter(this.feed.filter, 'blur(6px)'),
        backgroundImage: `url(${this.feed.imageUrl})`
      }
    },
    emphasizeContent () {
      const content = this.feed.content
      return content.replace(/(#[^\s]+)/g, '<em>$1</em>')
    }
  }
}
</script>

<style lang="scss">
.feed {
  position: relative;
  z-index: 1;
  padding: 16px;
}
.feed_image {
  position: relative;
}
.feed_image img {
  display: block;
  width: 100%;
}
.feed_image_mask {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}
.feed_image_mask::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 100px;
  background-image: linear-gradient(
    bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3)
  );
}
.feed_image_shadow {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 24px;
  bottom: -14px;
  z-index: -1;
  border-radius: 20px;
}
.feed_meta {
  position: absolute;
  top: 32px;
  left: 32px;
}
.feed_meta .friend {
  display: flex;
  align-items: center;
  color: white;
}
.feed_meta .friend_face {
  width: 32px;
  height: 32px;
  border-width: 1px;
}
.feed_meta .friend_face::before {
  left: -2px;
  right: -2px;
  top: -2px;
  bottom: -2px;
}
.feed_meta .friend_name {
  margin-left: 10px;
  padding-top: 0;
  width: auto;
}
.feed_action {
  margin-top: 16px;
  display: flex;
}
.feed_action span {
  padding: 10px;
  font-size: 20px;
  color: #666;
}
.feed_action_gap {
  flex: 1;
}
.feed_content {
  padding: 0 10px;
  font-size: 14px;
  color: #666;
  line-height: 1.5em;
}
.feed_content p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.feed_content em {
  font-style: normal;
  color: #009fff;
}
.feed_content_text {
  margin-left: 10px;
}
.feed_content .fa-heart {
  color: #ff6c6c;
}
</style>
