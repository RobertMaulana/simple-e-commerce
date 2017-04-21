<template lang="html">
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item, index) in 4" :key="index">
      <h3></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-image: url("https://ecs7.tokopedia.net/img/banner/2017/4/17/6547088/6547088_ef08e8e9-825c-4807-a598-e9dac7ba7f3c.jpg.webp");
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("https://ecs7.tokopedia.net/img/banner/2017/4/10/16723082/16723082_f75b0893-d4b1-41e9-8fac-58ef98928bc8.jpg.webp");
  }
</style>
