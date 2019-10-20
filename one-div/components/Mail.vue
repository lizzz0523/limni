<template>
  <div class="mail" />
</template>

<style>
.mail {
  position: relative;
  margin: 5px 0;
  border-radius: 4px;
  width: 40px;
  height: 30px;
  background-image: linear-gradient(90deg, rgb(228, 69, 69), rgb(129, 0, 0));
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.mail::before {
  content: '';
  position: absolute;
  top: -29px;
  left: 50%;
  z-index: 1;
  display: block;
  margin-left: -20px;
  border: 4px solid rgb(228, 69, 69);
  border-radius: 2px;
  width: 32px;
  height: 32px;
  background-color: #eee;
  transform: scaleX(1.3) rotate(45deg);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
}
.mail::after {
  content: '';
  display: block;
  margin: 7px 4px 0;
  width: 0;
  height: 0;
  border-top: 14px solid #999;
  border-bottom: 12px solid #eee;
  border-left: 14px solid #e0e0e0;
  border-right: 18px solid #e0e0e0;
  background-color: white;
}
</style>
