<template>
  <nav class="tab-list">
    <ul>
      <li>lake</li>
      <li class="tab-list_active">outdoors</li>
      <li>nature</li>
    </ul>
  </nav>
</template>

<style lang="scss">
.tab-list {
  margin: 0 20px;
  font-size: 12px;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background-image: linear-gradient(
      to left,
      #cfd7dd,
      #d7dde2 30%,
      #d7dde2 70%,
      #cfd7dd
    );
  }
  ul {
    display: flex;
  }
  li {
    padding: 16px 0;
    flex: 1;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0.6;
  }
  .tab-list_active {
    opacity: 0.9;
  }
}
</style>
