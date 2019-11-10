<template>
  <nav class="navigation">
    <h2 class="navigation_title">
      Stories
    </h2>
    <aside class="navigation_more">
      <span class="navigation_caret">
        <i class="fa fa-caret-right" />
      </span>
      Watch all
    </aside>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
}
.navigation_title {
  font-size: 15px;
}
.navigation_caret {
  margin-right: 4px;
}
</style>
