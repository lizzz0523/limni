<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: inherit;
}
em {
  font-style: normal;
}
ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4 {
  font: inherit;
}
input,
select,
button {
  font: inherit;
}
html,
body {
  height: 100%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#app {
  height: 100%;
  overflow: hidden;
}
@keyframes flip {
  0% {
    opacity: 1;
    transform: translate3d(0, 50px, 0) rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotateX(0deg);
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes rise {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes rise2 {
  0% {
    opacity: 0;
    transform: translate3d(0, 200%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes rise3 {
  0% {
    transform: translate3d(0, 100%, 0) scale(0);
  }
  100% {
    transform: translate3d(0, -50%, 0) scale(1);
  }
}
@keyframes path {
  to {
    stroke-dasharray: 0 95;
  }
}
@keyframes path2 {
  to {
    stroke-dasharray: 0 500;
  }
}
</style>
