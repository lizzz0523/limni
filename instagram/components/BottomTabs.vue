<template>
  <div class="bottom-tabs">
    <span><i class="fa fa-home"/></span>
    <span><i class="fa fa-search"/></span>
    <span><i class="fa fa-instagram"/></span>
    <span><i class="fa fa-heart-o"/></span>
    <span><i class="fa fa-user-o"/></span>
  </div>
</template>

<style lang="scss">
.bottom-tabs {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  border-top: 1px solid #eee;
  height: 64px;
  background-color: white;
  font-size: 20px;
}
.bottom-tabs span {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
