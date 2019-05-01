<template>
  <div class="row">
    <div class="master">
      <div class="box">
        <h4>已貼文</h4>
        <div class="center"></div>
      </div>
      <div class="box">
        <h4>關注</h4>
        <div class="center"></div>
      </div>
      <div class="box">
        <h4>留言</h4>
        <div class="center"></div>
      </div>
      <div class="box">
        <h4>收藏</h4>
        <br>
        <div class="center"></div>
      </div>
    </div>
    <div class="rightside">
      <div class="list">
        <h5>最近瀏覽</h5>
        <div class="center">
          
        </div>
      </div>
      <div class="list">
        <h5>個人資訊</h5>
        <div class="center">
          <img src="" alt="" style="float: left; margin: 10px 35px 10px 15px;" height="150" width="100" >
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.master { 
  height: 80%;  
  width: 69%;
  margin-right:1%;
}
.rightside{  
  width: 30%;
}
.box{    
  height: 80px;
  border: 1px ridge;
  border-color: green;  
  margin: 20px 0px;  
}
.list {  
  height: 200px auto;
  border: 1px ridge;
  border-color: green;
  margin: 20px 0px;  
}
h4 , h5{
  background-color:lightblue;
}
h5{
  text-align: center;
}

</style>
