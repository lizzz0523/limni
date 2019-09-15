<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search" />
    <avatar />
    <gradient />
    <todo-list />
    <todo-detail />
    <todo-editing />
    <floating-button />
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Avatar from '../components/Avatar.vue'
import Gradient from '../components/Gradient.vue'
import TodoList from '../components/TodoList.vue'
import TodoDetail from '../components/TodoDetail.vue'
import TodoEditing from '../components/TodoEditing.vue'
import FloatingButton from '../components/FloatingButton.vue'
export default {
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton
  }
}
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
}
</style>
