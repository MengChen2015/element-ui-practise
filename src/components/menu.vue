<template>
  <div>
    <h3>1.基础的tab选项卡</h3>
    <div>
      水平导航，使用mode="horizontal"，使用了index之后就能出现当前active的线条
      <br/>
      el-menu的default-active="6"属性，可以控制默认的当前导航，使用了index定义的值哦。
    </div>
    <div>垂直导航，使用mode="vertical"，切换会有背景色变化。style="width:100px;"能设置导航的宽度哦</div>
    <el-menu mode="horizontal" default-active="6">
        <el-menu-item index="1">品牌闪购</el-menu-item>
        <el-menu-item index="2">聚名品</el-menu-item>
        <el-menu-item index="6">今日疯抢</el-menu-item>
      </el-menu>
    <el-menu mode="vertical" style="width:100px;">
      <el-menu-item index="1">品牌闪购</el-menu-item>
      <el-menu-item index="2">聚名品</el-menu-item>
      <el-menu-item index="3">今日疯抢</el-menu-item>
    </el-menu>
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
