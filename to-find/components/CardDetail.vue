<template>
  <transition name="show" @enter="handleEnter" @leave="handleLeave">
    <div class="card-detail" v-if="selected">
      <card :card="selected.card" @select="unselectCard" />
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Card from './Card'
export default {
  components: {
    Card
  },
  computed: {
    ...mapState(['selected', 'unselect'])
  },
  methods: {
    ...mapMutations(['unselectCard']),
    handleEnter (el) {
      Object.assign(el.style, {
        top: `${this.selected.rect.top}px`,
        left: `${this.selected.rect.left}px`,
        width: `${this.selected.rect.width}px`,
        height: `${this.selected.rect.height}px`
      })
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${this.selected.rect.appWidth}px`,
          height: `${this.selected.rect.appHeight}px`
        })
      }, 0)
    },
    handleLeave (el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.unselect.rect.appWidth}px`,
        height: `${this.unselect.rect.appHeight}px`
      })
      setTimeout(() => {
        Object.assign(el.style, {
          top: `${this.unselect.rect.top}px`,
          left: `${this.unselect.rect.left}px`,
          width: `${this.unselect.rect.width}px`,
          height: `${this.unselect.rect.height}px`
        })
      }, 0)
    }
  }
}
</script>

<style lang="scss">
.card-detail {
  position: fixed;
  z-index: 10;
  will-change: top, left, width, height;

  .card_back {
    box-shadow: none;
    border-radius: 0;
  }
  .card_front {
    left: 0;
    right: 0;
    border-radius: 0;
    box-shadow: none;
    transform: translate3d(0, -120px, 0);
  }
  .card_map {
    opacity: 1;
    transform: translate3d(0, 80px, 0);
  }
  .card_head {
    padding: 0 30px 8px;
  }
  .card_location {
    padding: 0 20px;
  }
  .card_address {
    transform: translate3d(0, 0, 0);
  }
  .card_star {
    transform: translate3d(0, 0, 0);
  }
  .abstract_face {
    opacity: 0;
  }
  .post-list {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  .post {
    padding: 16px 30px;
  }
}
.show-enter-to,
.show-leave {
  .card_back {
    border-radius: 0;
  }
  .card_front {
    left: 0;
    right: 0;
    border-radius: 0;
    box-shadow: none;
    transform: translate3d(0, -120px, 0);
  }
  .card_map {
    opacity: 1;
    transform: translate3d(0, 80px, 0);
  }
  .card_head {
    padding: 0 30px 8px;
  }
  .card_location {
    padding: 0 20px;
  }
  .card_address {
    transform: translate3d(0, 0, 0);
  }
  .card_star {
    transform: translate3d(0, 0, 0);
  }
  .abstract_face {
    opacity: 0;
  }
  .post-list {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  .post {
    padding: 16px 30px;
  }
}
.show-leave-to,
.show-enter {
  .card_back {
    border-radius: 4px;
  }
  .card_front {
    left: 16px;
    right: 16px;
    border-radius: 4px;
    box-shadow: 0 22px 16px -12px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -100px, 0);
  }
  .card_map {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  .card_head {
    padding: 0 0 8px;
  }
  .card_location {
    padding: 0;
  }
  .card_address {
    transform: translate3d(0, 22px, 0);
  }
  .card_star {
    transform: translate3d(65%, 0, 0);
  }
  .abstract_face {
    opacity: 1;
  }
  .post-list {
    transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  .post {
    padding: 16px 0;
  }
}
.show-enter-active,
.show-leave-active {
  transition: all 0.6s ease;

  .card,
  .card_back,
  .card_front,
  .card_map,
  .card_head,
  .card_location,
  .card_address,
  .card_star,
  .abstract_face,
  .post-list,
  .post {
    transition: all 0.6s ease;
  }
}
</style>
