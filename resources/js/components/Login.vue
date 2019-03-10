<template>
  <el-container>
    <el-header>校園工具人派遣</el-header>
    <el-main>
      <div class="logintitle">coming soon. . .</div>
      <div class="login">
        <div class="logincontent">帳號</div>
        <div class="logincontent">
          <el-input
            v-model="account"
            placeholder="請輸入帳號"
          ></el-input>
        </div>
        <div class="logincontent">密碼</div>
        <div class="logincontent">
          <el-input
            placeholder="請輸入密碼"
            v-model="password"
            show-password
          ></el-input>
        </div>
        <div class="logincontent">
          <el-button
            type="primary"
            @click.native="login"
          >登入</el-button>
        </div>
      </div>
    </el-main>
    <el-footer>Copyright &copy; 2019 Apple Inc.</el-footer>
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
  .el-header {
    font-size: 2em;
  }
  .el-header,
  .el-footer {
    background-color: rgba(0, 27, 128, 0.5);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    position: relative;
    background-color: #eae2d6;
    color: #333;
  }
  .logintitle {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }
  .login {
    z-index: 1;
    width: 40%;
    height: 60%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logincontent + .logincontent {
    margin-top: 10px;
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