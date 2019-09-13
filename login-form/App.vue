<template>
  <div id="app" class="app">
    <router-view></router-view>
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
ul,
ol {
  list-style: none;
}
input,
select,
button {
  font: inherit;
}
html,
body {
  height: 100%;
}
body {
  background-color: #007dff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.app {
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
