<template>
  <div class="loginpage">
    <p>
      使用者登入
    </p>
    <input
      type="text"
      placeholder="請輸入帳號"
      v-model.trim="account"
    ><br>
    <input
      type="text"
      placeholder="請輸入密碼"
      v-model.trim="password"
    ><br>
    <button @click='login'>
      登入
    </button>
  </div>
</template>
<style scope>
  .loginpage {
    width: 1000px;
    height: 1000px;
    background-color: lavender;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
<script>
  import store from "@/store";
  import { router } from "@/main.js";
  export default {
    data() {
      return {
        account: "",
        password: ""
      };
    },
    methods: {
      login() {
        this.$store.dispatch("Login", true);
        // console.log(this.$route.meta.requireAuth);
        // this.$route.meta.requireAuth = false;
        // console.log(this.$route.meta.requireAuth);
        window.localStorage.setItem("loginstatus", true);
        this.$router.push("/");
      }
    }
  };
</script>