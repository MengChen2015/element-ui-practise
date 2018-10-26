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
    <div>导航栏的高亮和当前导航，default-active和index属性没有记错哦</div>
    <div>2级导航:
      <br/>
      (1)el-submenu作为导航内容的包裹器，index表明导航的索引
      <br/>
      (2)第一级导航使用template,图标i和标题span是内容
      <br/>
      (3)第二级导航使用el-menu-item来写选项内容
    </div>
    <div>只要有了下一级导航，那么就会有扩展的箭头???这是一个切入点，i guess</div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <div>
      isCollapse这个值来控制展开和收起
      <br/>
      以及el-menu属性:collapse="isCollapse"
    </div>
    <el-menu mode="vertical" default-active="2"
           class="el-menu-vertical-demo"
             :collapse="isCollapse">
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">
                 分组1
            </template>
            <el-menu-item>
              选项一
            </el-menu-item>
            <el-menu-item>
              选项二
            </el-menu-item>
            <el-menu-item>
              选项三
            </el-menu-item>
          </el-menu-item-group>

        </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
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
        isCollapse:true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
