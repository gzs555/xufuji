<template>
  <div class="block">
    <el-carousel height="500px" :interval="3000" arrow="never">
      <el-carousel-item v-for="item in list" :key="item">
        
        <img :src="item" alt="" class="picture"> 
        <img src="../assets/face/1.jpg" alt="" class="picture"> 
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        require('../assets/face/1.jpg'),
        require("../assets/face/2.jpg"),
        require("../assets/face/3.jpg"),
        require("../assets/face/4.jpg"),
        require("../assets/face/5.jpg"),
        require("../assets/face/6.jpg"),
        require("../assets/face/7.jpg"),
        require("../assets/face/8.jpg"),
      ],
    };
  },
};
</script>

<style >
.el-carousel__container{
  height: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.picture{
  width: 100%;
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
