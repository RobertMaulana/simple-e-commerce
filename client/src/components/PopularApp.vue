<template lang="html">
  <el-row :gutter="24">
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">Populer di CheaperShop</span>
          <el-button style="float: right;" type="primary">All Products</el-button>
        </div>
        <el-row :gutter="10">
          <el-col :span="5" v-for="(product, index) in popularProduct" :offset="index > 0 ? 1 : 0" :key="index">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://www.kingsford.com/wp-content/uploads/2014/11/kfd-howtohamburger-Burgers_5_0391-1024x621.jpg" class="image">
              <div style="padding: 14px;">
                <span>{{product.product_name}}</span>
                <span>Rp. {{product.price}}</span>
                <div class="bottom clearfix">
                  <time class="time"></time>
                  <el-button type="text" class="button" @click="buy(product)">Buy</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
let dataCart = [];
export default {
  data(){
    return {
    }
  },
  methods: {
    buy(product){
      dataCart.push(product)
      window.localStorage.setItem("cart", JSON.stringify(dataCart))
      this.$store.commit("cart", JSON.stringify(dataCart))
      this.$store.commit("dataCart", JSON.parse(window.localStorage.getItem("cart")))
    }
  },
  computed: {
    // ...mapActions([
    //   "countCart"
    // ]),
    ...mapGetters({
      popularProduct: 'popularProducts',
      statusLogin: 'isLogin',
    })
  },
  created(){
    this.$store.dispatch("popularProducts")
  }

}
</script>

<style lang="css" scoped>
  .el-col-offset-1 {
    margin-left: 67px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  .el-card {
    margin-top: 20px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
