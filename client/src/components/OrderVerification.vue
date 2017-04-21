<template lang="html">
  <el-card class="box-card">
    <el-steps :space="100" :active="active" finish-status="success">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>
    <el-card class="box-card">
      <div v-for="o in 4" class="text item">
        {{'List item ' + o }}
      </div>
    </el-card>
    <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
  </el-card>

</template>

<script>
export default {
  data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
}
</script>

<style lang="css" scoped>
  .el-card{
    text-align: left;
  }
</style>
