<template>
  <div>
    <p>
      in the login
    </p>
    <button @click='login'>
      登入
    </button>
  </div>
</template>
<script>
  import store from "@/store";
  import { router } from "@/main.js";
  export default {
    methods: {
      login() {
        this.$store.dispatch("Login", true);
        console.log(this.$route.meta.requireAuth);
        this.$route.meta.requireAuth = false;
        console.log(this.$route.meta.requireAuth);
        this.$router.push("/");
      }
    }
  };
</script>