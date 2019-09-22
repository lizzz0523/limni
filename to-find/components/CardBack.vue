<template>
  <div class="card_back">
    <div class="card_map"></div>
    <div class="card_head">
      <p class="card_address">{{ card.address }}</p>
      <p class="card_address">{{ card.postcode }}</p>
      <div class="card_star">
        <i
          class="fa fa-star"
          v-for="i in 5"
          :class="{ card_star_gray: i > card.star }"
          :key="`${i}`"
        />
      </div>
    </div>
    <div class="card_body">
      <abstract :posts="card.posts" />
      <post-list :posts="card.posts" />
    </div>
  </div>
</template>

<script>
import Abstract from './Abstract.vue'
import PostList from './PostList.vue'
export default {
  components: {
    Abstract,
    PostList
  },
  props: {
    card: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.card_back {
  position: relative;
  padding-top: 250px;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  color: #999;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  font-size: 12px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease;

  .post-list {
    transform: scale3d(1, 0, 1);
    opacity: 0;
  }
}
.card_map {
  height: 100px;
  background-image: url(../assets/map.png);
  background-size: cover;
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
.card_address {
  padding: 6px 24px 0;
  line-height: 16px;
  transform: translate3d(0, 22px, 0);
}
.card_star {
  padding: 6px 24px;
  color: #c48cf5;
  transform: translate3d(65%, 0, 0);

  i {
    margin: 0 1px;
    line-height: 16px;
  }
}
.card_star_gray {
  color: #eee;
}
.card_head {
  padding-bottom: 8px;
  border-bottom: 1px solid #f9f9f9;
}
</style>
