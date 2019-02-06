<template>
  <div>
    <div class="row mb">
      <div class='test'>
        <input
          class="form-control mr-sm-2 col-6"
          type="search"
          placeholder="Search"
          v-model.trim="intext"
        >
        <div class="col-6">show :{{intext}}</div>
      </div>
    </div>
  </div>
</template>
<style scope>
  .test {
    display: flex;
  }
</style>
<script>
  export default {
    data: function() {
      return {
        intext: ""
      };
    }
  };
</script>
