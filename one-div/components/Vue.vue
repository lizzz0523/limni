<template>
  <div class="vue" />
</template>

<style>
.vue {
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
}
.vue::before,
.vue::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: scaleY(1.8) translate(-50%, -30px) rotate(45deg);
}
.vue::before {
  width: 40px;
  height: 40px;
  background: #41b883;
}
.vue::after {
  width: 20px;
  height: 20px;
  border: 6px solid #35495e;
  background-color: white;
}
</style>
