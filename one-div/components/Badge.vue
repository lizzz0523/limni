<template>
  <div class="badge">Hi</div>
</template>

<style>
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  4% {
    transform: rotate(-5deg);
  }
  8% {
    transform: rotate(5deg);
  }
  12% {
    transform: rotate(-5deg);
  }
  16% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  24% {
    transform: rotate(5deg);
  }
  28% {
    transform: rotate(0deg);
  }
}
.badge {
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 4px 4px 0 0;
  margin: 2px;
  width: 36px;
  height: 36px;
  overflow: hidden;
  filter: drop-shadow(0 1px 1px #973340a3);
  color: white;
  font-weight: bold;
  line-height: 32px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  animation: shake infinite 2s ease;
}
.badge::before,
.badge::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  display: block;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, red, #ff8484);
}
.badge::before {
  transform-origin: left top;
  transform: skewY(-20deg);
}
.badge::after {
  transform-origin: right top;
  transform: skewY(20deg);
}
</style>
