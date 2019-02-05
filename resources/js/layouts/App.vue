<template>
  <div>
    <div class="container">
      <router-link :to="{name: 'home'}">home</router-link>
      <router-link :to="{name: 'login'}">login</router-link>
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