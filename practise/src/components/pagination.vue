<template>
  <div style="margin-bottom:50px;">
    <h2>一.功能介绍</h2>
    <h3>1.基础分页</h3>
    <h3>没有省略号的用法:layout表示需要显示的内容，
      prev表示上一页，next表示下一页，pager表示页码。还有比
      较冷门的，jumper。另外total表示总条目数，size表示每页
      显示的数量。</h3>
    <div>total是动态绑定的哦，如果写静态的total属性是无效的。</div>
    <div>
      <span style="color:red;">
        如果我对分页组件比较敏感，那么昨天我就能在对字段的时候马上说出表格
        和分页是需要总条目数的。
      </span>
    </div>
    <div>我这里并没有规定Size，然而真的给我分了50/10等于5页</div>
    <el-pagination layout="prev,pager,next" :total="50">
    </el-pagination>
    <h3>有省略号(大于7页)的用法:</h3>
    <el-pagination layout="prev,pager,next" :total="200">
    </el-pagination>
    <el-pagination layout="prev,pager,next"  :total="200">
    </el-pagination>
    <div>
      <span style="color:red;">
        :size="5"并没有生效，Size到底怎么用
      </span>
    </div>
    <div><span style="color:red;">注意&nbsp;</span>我要使用el-pagination,
      不过并不需要组件内部import，因为在main.js已经使用了
      Vue.use(ElementUI)</div>
    <h3>2.最大的页码按钮数</h3>
    <div>默认情况下是超过7页折叠</div>
    <h4>(1)刚好7页就不折叠啦，页码从1显示到7</h4>
    <el-pagination layout="prev,pager,next" :total="70">
    </el-pagination>
    <h4>(2)8页就开始折叠，一共显示了7个按钮以及倒数第二的省略号</h4>
    <el-pagination layout="prev,pager,next" :total="80">
    </el-pagination>
    <el-pagination layout="prev,pager,next" :total="90">
    </el-pagination>
    <el-pagination layout="prev,pager,next" :total="100">
    </el-pagination>
    <h4>(3)<span style="color:red;">page-count有bug????</span></h4>
    <div style="color:red;">page-count=12没有用呢</div>
    <div>报错:</div>
    <el-pagination layout="prev,pager,next" :total="1000" :page-count="12">
    </el-pagination>
    <div>:page-size能显示分页组件每一页显示多少条目</div>
    <el-pagination layout="prev,pager,next" :total="1200" :page-size="20">
    </el-pagination>
    <div>toal(1211)除以page-size(20)等于60加上余数，那么61是对的</div>
    <el-pagination layout="prev,pager,next" :total="1211" :page-size="20">
    </el-pagination>
    <h3>3.分页按钮的样式</h3>
    <div>默认的background属性，显示灰色背景的按钮以及active显示蓝色哦。</div>
    <el-pagination background layout="prev,pager,next" :total="1211" :page-size="20">
    </el-pagination>
    <h3>4.小型分页</h3>
    <div>按钮变小了而已。依然以写与不写来区分true或者false</div>
    <div>2.4.8版本没问题，和我看到的API版本是一致的</div>
    <el-pagination small :total="100" layout="prev,pager,next">
    </el-pagination>
    <div>small="true"肯定是生效的</div>
    <div>报错:[Vue warn]: Invalid prop: type check failed for
      prop "small". Expected Boolean, got String.</div>
    <el-pagination small=true :total="100" layout="prev,pager,next">
    </el-pagination>
    <div>small="false"<span style="color:red;">bug??????待定，可能是用错了</span></div>
    <div>vue.esm.js?efeb:591 [Vue warn]: Invalid prop: type check failed for prop "small".
      Expected Boolean, got String.</div>
    <el-pagination small=false :total="100" layout="prev,pager,next">
    </el-pagination>
    <h3>4.添加其他功能</h3>
    <h3>5.我的场景</h3>
    <div>图片如下:</div>
    <img src="../assets/pagination_apollo.png" width="411" height="55"/>
    <el-pagination background :total="230" layout="prev,pager,next">
    </el-pagination>
    <div>
      style块，不能使用scoped属性哦，否则不生效。
      <br/>
      <span style="font-weight:bold;color:red;">
        我的场景:
      </span>
      使得active的按钮是红色，hover也从蓝色变为红色了。
      <br/>
      .el-pagination.is-background .el-pager li:not(.disabled).active {<br/>
      background:red;<br/>
      }<br/>
      .el-pagination.is-background .el-pager li:hover {<br/>
      color:red !important;<br/>
      }<br/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    data () {
      return {
      }
    },
    methods: {
    },
  }
</script>

<style scoped>
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background:red;
  }
  .el-pagination.is-background .el-pager li:hover {
    color:red !important;
  }
</style>
