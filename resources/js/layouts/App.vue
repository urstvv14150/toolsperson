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
      <div class="col-lg-10 col-sm-12">
        <Carousel></Carousel>
        <div class="row mb">
          <div class="col-12 wantdoit">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div
      class="gotop"
      @click="gotop"
      ref="toolbarChat"
      :class="goTop?'topblock':''"
    >
      <p>↑</p>
    </div>
    <Sideleft></Sideleft>
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
  import Vue from "vue";
  import Sideleft from "@/components/home/Sideleft.vue";
  import Navbar from "@/components/home/Navbar.vue";
  import Carousel from "@/components/home/Carousel.vue";

  export default {
    components: {
      Sideleft,
      Navbar,
      Carousel
    },
    data() {
      return {
        goTop: false,
        scrollTop: ""
      };
    },
    methods: {
      gotop() {
        // console.log('gotop!')
        let speed = 10;
        let timer = setInterval(function() {
          this.scrollTop =
            document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
          if (this.scrollTop > 0) {
            this.scrollTop =
              this.scrollTop - speed > 0 ? this.scrollTop - speed : 0;
            speed += 20;
            window.scrollTo(0, this.scrollTop);
          } else {
            clearInterval(timer);
          }
        }, 16);
      },
      showTop() {
        this.scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;
        // console.log(document.documentElement.scrollTop);
        // console.log(window.pageYOffset);
        if (this.scrollTop > 200) {
          this.goTop = true;
        } else {
          this.goTop = false;
        }
      }
    }
  };
</script>