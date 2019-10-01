<template>
  <transition name="show" @enter="handleEnter" @after-enter="handleAfterEnter">
    <div
      class="feed-detail"
      v-if="selected"
      :class="{ 'feed-detail__stat': isShowStat }"
    >
      <feed-magic
        v-if="isShowMagic"
        :url="selected.feed.coverUrl"
        :play="isShowStat"
        @ready="handleReady"
      />
      <feed ref="feed" :feed="selected.feed" />
      <feed-meta :feed="selected.feed" @fullstat="handleFullStat" />
      <post-list :posts="selected.feed.posts" />
      <feed-stat v-if="isShowStat" :feed="selected.feed" />
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import Feed from './Feed.vue'
import FeedMeta from './FeedMeta.vue'
import FeedStat from './FeedStat.vue'
import PostList from './PostList.vue'
import FeedMagic from './FeedMagic.vue'
export default {
  components: {
    Feed,
    FeedMeta,
    FeedStat,
    FeedMagic,
    PostList
  },
  data () {
    return {
      isShowStat: false,
      isShowMagic: false,
      isMagicReady: false
    }
  },
  computed: {
    ...mapState(['selected'])
  },
  watch: {
    selected (val) {
      if (!val) {
        this.isShowStat = false
        this.isShowMagic = false
        this.isMagicReady = false
      }
    }
  },
  methods: {
    handleFullStat () {
      if (this.isMagicReady) {
        this.isShowStat = true
      }
    },
    handleEnter () {
      const top = this.selected.rect.top - 141 + 53
      const feed = this.$refs.feed

      feed.$el.style.transform = `translate3d(0, ${top}px, 0)`

      setTimeout(() => {
        feed.$el.style.transform = ''
      }, 0)
    },
    handleAfterEnter () {
      setTimeout(() => {
        this.isShowMagic = true
      }, 600)
    },
    handleReady () {
      this.isMagicReady = true
    }
  }
}
</script>

<style lang="scss">
.feed-detail {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding-top: 88px;

  .feed {
    padding: 16px 20px 0;
    transform: translate3d(0, 0, 0);
  }
  .feed_avatar {
    transform: translate3d(-20px, -275px, 0);
  }
  .feed_text {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.feed-detail__stat {
  background-color: #f1f2fb;
  .post-list > ul > li {
    perspective: 1900px;
  }
  .post {
    transform: translate3d(0, -50px, 0) rotateX(90deg);
    transform-style: preserve-3d;
    transition: all 0.6s ease-in;
  }
  .post-list {
    opacity: 0;
    transition: all 0.6s ease-in;
  }
  .feed_cover {
    opacity: 0;
  }
  .feed-meta {
    opacity: 0;
  }
}
.show-leave-to {
  transform: translate3d(0, 100%, 0);
}
.show-enter {
  .feed {
    padding: 16px 8px 0;
    transform: translate3d(0, 53px, 0);
  }
  .feed_avatar {
    transform: translate3d(-82vw, -2vw, 0);
  }
  .feed_text {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
}
.show-enter-active,
.show-leave-active {
  transition: all 0.6s ease;
  .feed,
  .feed_avatar,
  .feed_text {
    transition: all 0.6s ease;
  }
}
</style>
