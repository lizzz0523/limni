<template>
  <div class="card-list" :class="{ 'card-list__selected': !!selected }">
    <ul :style="{ width: `${cards.length * 100}%` }">
      <li
        v-for="card in cards"
        :key="card.id"
        :style="{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }"
      >
        <card
          :card="card"
          :selected="selected && selected.card === card"
          @select="selectCard"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  computed: {
    ...mapState(['cards', 'currentIndex', 'selected'])
  },
  methods: {
    ...mapMutations(['prevCard', 'nextCard', 'selectCard'])
  },
  mounted () {
    let touch = {}
    this.$el.addEventListener('touchstart', evt => {
      touch.startX = evt.touches[0].clientX
      touch.endX = 0
    })
    this.$el.addEventListener('touchmove', evt => {
      touch.endX = evt.touches[0].clientX
    })
    this.$el.addEventListener('touchend', () => {
      if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
        return
      }
      if (touch.endX < touch.startX) {
        this.nextCard()
      } else {
        this.prevCard()
      }
    })
  }
}
</script>

<style lang="scss">
.card-list {
  margin: 30px;
  height: 496px;
  transform: scaleX(1);
  transition: all 0.6s ease;

  ul {
    display: flex;
    height: 100%;
  }
  li {
    flex: 1;
    transition: all 0.6s ease;
  }
}
.card-list__selected {
  transform: scaleX(1.1);
}
</style>
