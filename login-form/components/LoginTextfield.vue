<template>
  <span class="login_textfield">
    <label><i v-if="icon" :class="['fa', `fa-${icon}`]"></i> {{ label }}</label>
    <input type="text" />
  </span>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>
<style>
.login_textfield {
  flex: 1;
  display: flex;
  padding: 10px;
  width: 100%;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 1px 1px #0066d0;
}
.login_textfield label {
  margin-right: 10px;
  color: #007dff;
}
.login_textfield label i {
  width: 20px;
}
.login_textfield input {
  flex: 1;
  width: 0;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}
</style>
