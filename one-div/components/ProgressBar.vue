<template>
  <div class="progress-bar" />
</template>

<style>
.progress-bar {
  position: relative;
  border-radius: 8px;
  width: 60px;
  height: 20px;
  background-color: #eee;
  transform: translateY(-34%);
}
.progress-bar::before {
  content: '';
  position: relative;
  z-index: 1;
  display: block;
  border-radius: 8px;
  height: 20px;
  width: 50%;
  background-image: linear-gradient(0deg, #ff7a3b, #ffc107);
  box-shadow: 0 1px 2px 0 #ff7a3ba3;
  filter: drop-shadow(2px 0 1px rgba(0, 0, 0, 0.2));
  transition: all 0.2s ease;
}
.progress-bar::after {
  content: '50%';
  position: absolute;
  left: 50%;
  transform: scale(0.9) translate(-50%, 20%);
  font-size: 12px;
  font-weight: bold;
  color: #54390f;
}
.progress-bar:active::before {
  width: 100%;
}
.progress-bar:active::after {
  content: '100%';
}
</style>
