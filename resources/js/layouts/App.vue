<template>
  <div
    class="container-fluid"
    id="app"
    v-scroll="showTop"
  >
    <Navbar></Navbar>
    <div class="row">
      <div class="col-lg-1 col-sm-0">
      </div>
      <div class="col-lg-11 col-sm-12">
        <Carousel></Carousel>
        <div class="row mb">
          <div class="col-12 wantdoit">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <Sideleft></Sideleft>
  </div>
</template>
<style>
</style>
<script>
  import Vue from "vue";
  import Sideleft from "@/components/home/Sideleft.vue";
  import Navbar from "@/components/home/Navbar.vue";
  import Carousel from "@/components/home/Carousel.vue";
  import Gotop from "@/components/home/Gotop.vue";

  export default {
    components: {
      Sideleft,
      Navbar,
      Carousel
    }
  };
</script>