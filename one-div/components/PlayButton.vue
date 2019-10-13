<template>
  <div class="play-btn" />
</template>

<style>
.play-btn {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: linear-gradient(45deg, #5298ff, #ff00a8);
  box-shadow: 0 1px 2px 1px #5297ffa3;
}
.play-btn::before {
  content: '';
  position: absolute;
  left: 21px;
  top: 50%;
  margin-left: -4px;
  margin-top: -8px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-left-color: white;
  border-top-width: 8px;
  border-bottom-width: 8px;
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.2));
  transition: all 0.2s ease;
  will-change: border-width, height, left;
}
.play-btn::after {
  content: '';
  position: absolute;
  right: 16px;
  top: 50%;
  margin-right: -4px;
  margin-top: -8px;
  width: 0;
  height: 16px;
  border: 5px solid transparent;
  border-width: 0 0 0 5px;
  border-left-color: white;
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.2));
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s ease;
}
.play-btn:active::before {
  border-width: 0 0 0 5px;
  height: 16px;
  left: 16px;
}
.play-btn:active::after {
  opacity: 1;
  transform: scale(1);
}
</style>
