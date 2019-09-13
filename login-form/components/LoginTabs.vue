<template>
  <ul class="login_tabs">
    <li><span href="#">Sign up</span></li>
    <li class="login_tabs_s">or</li>
    <li><span href="#">Sign in</span></li>
  </ul>
</template>
<style>
.login_tabs {
  display: flex;
  padding: 0 34px;
}
.login_tabs li {
  display: flex;
  padding: 10px;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  transition: all 0.6s ease;
}
.login_tabs span {
  display: block;
  padding: 4px 10px;
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  text-align: center;
  transition: all 0.3s ease;
}
.login_tabs .login_tabs_s {
  justify-content: center;
  transition-duration: 0.55s;
  transition-delay: 0.05s;
}
.login_tabs_s {
  font-size: 12px;
}
.login_tabs_s:before,
.login_tabs_s:after {
  content: '-';
}
.login__signup .login_tabs li:first-child {
  transition-duration: 0.5s;
  transition-delay: 0.1s;
  transform: translateX(100%) scale(1.5);
}
.login__signup .login_tabs li:first-child span {
  border-color: transparent;
}
.login__signup .login_tabs li:last-child {
  transform: scale(0.6);
  opacity: 0.4;
}
.login__signup .login_tabs_s {
  transform: translateX(58%);
  opacity: 0.8;
}
.login__signin .login_tabs li:last-child {
  transition-duration: 0.5s;
  transition-delay: 0.1s;
  transform: translateX(-100%) scale(1.5);
}
.login__signin .login_tabs li:last-child span {
  border-color: transparent;
}
.login__signin .login_tabs li:first-child {
  transform: scale(0.6);
  opacity: 0.4;
}
.login__signin .login_tabs_s {
  transform: translateX(-58%);
  opacity: 0.8;
}
</style>
