<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <div>Main</div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<style scope>
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  #app {
    height: 100%;
  }
  .el-container {
    height: 100%;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    display: flex !important;
    justify-content: center;
    align-items: center;
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
        window.localStorage.setItem("loginstatus", true);
        this.$router.push("/");
      }
    }
  };
</script>