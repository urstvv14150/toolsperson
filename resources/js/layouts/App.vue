<template>
  <div>
    <div class="container">
      <home></home>
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import home from "../components/Home";
  export default {
    components: {
      home
    }
  };
</script>