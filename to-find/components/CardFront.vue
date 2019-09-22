<template>
  <div
    class="card_front"
    :style="{
      backgroundImage: `url(${card.coverUrl})`,
      backgroundSize: coverSize
    }"
  >
    <h2 class="card_title">{{ card.title }}</h2>
    <div class="card_location">
      <span>{{ card.location.lat }}</span>
      <span class="card_location_icon"><i class="fa fa-map-marker"></i></span>
      <span>{{ card.location.lng }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    }
  },
  data () {
    return {
      coverSize: `${window.innerWidth}px auto`
    }
  }
}
</script>

<style lang="scss">
.card_front {
  position: absolute;
  left: 16px;
  right: 16px;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #333;
  background-position: center;
  box-shadow: 0 22px 16px -12px rgba(0, 0, 0, 0.2);
  filter: grayscale(0.4);
  transition: all 0.6s ease;
  will-change: transform, left, right;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(99, 94, 86, 0.5),
      rgba(99, 94, 86, 0) 30%,
      rgba(64, 65, 66, 0) 70%,
      rgba(33, 34, 35, 0.9)
    );
  }
}
.card_title {
  padding: 30px 0;
  text-align: center;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  opacity: 0.9;
}
.card_location {
  display: flex;
  text-transform: uppercase;

  span {
    padding: 20px 0;
    flex: 1;
    text-align: center;
    text-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
    font-weight: 100;
    font-size: 12px;
    opacity: 0.7;
  }
  .card_location_icon {
    width: 20px;
    flex: none;
  }
}
</style>
