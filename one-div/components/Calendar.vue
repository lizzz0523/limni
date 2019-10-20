<template>
  <div class="calendar">31</div>
</template>

<style>
.calendar {
  position: relative;
  margin: 2px 5px 30px;
  border-radius: 2px 2px 0 0;
  width: 36px;
  height: 5px;
  transform-style: preserve-3d;
  background-color: #ccc;
  color: rgb(233, 233, 233);
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  line-height: 40px;
  transform: translateZ(0);
}
.calendar::before,
.calendar::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 5px;
  z-index: -1;
  display: block;
  margin-left: -20px;
  border-radius: 3px;
  width: 40px;
  height: 30px;
}
.calendar::before {
  background-color: rgb(35, 109, 193);
  transform: translateZ(-2px) rotateX(-10deg);
}
.calendar::after {
  background-color: rgb(45, 118, 228);
  transform: translateZ(-2px) rotateX(10deg);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
