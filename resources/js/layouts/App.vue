<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <el-button>默认按钮</el-button>
        </div>
        <div class="col-4">
          <el-button type="primary">主要按钮</el-button>
        </div>
        <div class="col-4">
          <el-button type="success">成功按钮</el-button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style>
</style>
<script>
  export default {};
</script>