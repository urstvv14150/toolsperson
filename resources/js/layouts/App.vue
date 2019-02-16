<template>
  <div
    class="container-fluid"
    id="app"
  >
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style scope>
  .fade-enter-active {
    transition: opacity 0.5s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>
<script>
  export default {};
</script>