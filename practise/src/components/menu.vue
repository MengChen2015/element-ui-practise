<template>
  <div style="padding-bottom:280px;">
    <h3>1.基础的tab选项卡</h3>
    <div>
      水平导航，使用mode="horizontal"，使用了index之后就能出现当前active的线条
      <br/>
      el-menu的default-active="6"属性，可以控制默认的当前导航，使用了index定义的值哦。
    </div>
    <div>
      垂直导航，使用mode="vertical"，切换会有背景色变化。style="width:100px;"能设置导航的宽度哦
      <br/>
      默认的
    </div>
    <el-menu mode="horizontal" default-active="6">
        <el-menu-item index="1">品牌闪购</el-menu-item>
        <el-menu-item index="2">聚名品</el-menu-item>
        <el-menu-item index="6">今日疯抢</el-menu-item>
      </el-menu>
    <el-menu mode="vertical" style="width:100px;" default-active="2">
      <el-menu-item index="1">品牌闪购</el-menu-item>
      <el-menu-item index="2">聚名品</el-menu-item>
      <el-menu-item index="3">今日疯抢</el-menu-item>
    </el-menu>
    <h3>2.基础用法(UI完善)</h3>
    <div><img src="../assets/navmenu_1.png" width="800" height="auto"/></div>
    <div>
      <div style="color:red;">功能分析:</div>
      <div>1.当前导航的下划线。当写了index的值，那么点击之后会有active的下划线。
        <br/>
        default-active="1"来控制默认的导航哦</div>
      <div>2.消息中心禁止掉，使用disabled属性就好啦</div>
      <div>3.子菜单使用el-submenu组件，定义title使用template<br/>
        子菜单依然使用el-menu-item</div>
    </div>
    <el-menu mode="horizontal" default-active="1" class="processingCenter">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
          <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>

      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
    <h3>3.侧栏导航</h3>
    <el-menu mode="vertical">
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
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

<style >
  .processingCenter.el-menu.el-menu--horizontal{
    background:red;

  }
  .processingCenter.el-menu.el-menu--horizontal .el-menu-item {
    color:#fff;
  }
  .processingCenter.el-menu.el-menu--horizontal .el-menu-item   .el-submenu__title{
    color:#fff !important;
  }
</style>
