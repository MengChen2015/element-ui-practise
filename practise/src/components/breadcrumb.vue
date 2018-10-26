<template>
  <div style="padding-bottom:280px;">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data () {
      return {
      }
    },
    methods: {
    },
  }
</script>

<style scoped>
</style>
