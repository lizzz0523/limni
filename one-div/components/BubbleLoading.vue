<template>
  <div class="bubble-loading">20%</div>
</template>

<style>
@keyframes rotate2 {
  0% {
    transform: rotate(0deg) translateY(-2px);
  }
  100% {
    transform: rotate(360deg) translateY(-2px);
  }
}
.bubble-loading {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-image: linear-gradient(45deg, rgb(14, 14, 46), rgb(64, 64, 113));
  color: white;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);
}
.bubble-loading::before,
.bubble-loading::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  margin-left: -20px;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: rgb(51, 149, 230);
  transform: translateY(-2px);
  z-index: -1;
}
.bubble-loading::before {
  animation: rotate2 infinite 3s linear;
}
.bubble-loading::after {
  animation: rotate2 infinite 2s linear;
}
</style>
