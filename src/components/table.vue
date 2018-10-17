<template>
  <div style="margin-bottom:50px;">
    <h2>一.功能介绍</h2>
    <h3>1.基础表格</h3>
    <p>基础表格每一行有一条下边框</p>
    <p>el-table的data属性绑定一个数组，数组的特点是每个元素包含对应的一排的值</p>
    <p>el-table-column的with属性数值是px为单位</p>
    <p>el-table-column表头用label来控制</p>
    <p>el-table-column表格的值用prop来控制</p>
    <p>jsfiddle.net运行网页代码，以后可以用上的</p>
    <p>stripe写上即为启用也可以写成stripe="true"。hover效果默认就有啦</p>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <p>el-table-column使用v-for指令来遍历</p>
    <h4 style="color:red;">??????不知道如何操作呢555555</h4>
    <h3>2.带边框和带状态的表格</h3>
    <p>数值方向的边框使用border属性即可。
      border="false"并没有如我所愿。
      以后使用就以简单的写与不写来区别吧。</p>
    <p style="color:red;">border=false和stripe=false并没有如我所愿。</p>
    <p>
      {row, rowIndex}row-class-name的传入参数是row和rowIndex组成的对象。
      <br/>
      rowIndex是行数的索引
    </p>
    <p>为什么没有效果？
      .el-table--striped .el-table__body tr.el-table__row--striped td
      默认的样式权重比较高
    </p>
    <p><span style="color:red;">caution:</span>
      <br/>
      1..el-table .success-row td选择器要精确到td <br/>
      2.important必须有，
      因为默认的权重常常要超出短的选择器
      <span style="color:red;">
        (.el-table .success-row td)
      </span>
    </p>
    <el-table
      :data="tableData"
      stripe
      border
      :row-class-name="tableRowClassName2">
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <h3>3.固定表头和列</h3>
    <h3>4.流体高度</h3>
    <p>max-height="250"指定最大高度</p>
    <p>最后一列的el-table-column的fixed="right"就能把最右侧固定住</p>
    <p>第一列的fixed也能把第一列固定住哦</p>
    <p>为什么我设置宽度800就需要滚动条，其实是el-table-column
      的width属性150+120+120+120+120+300+120等等。
      所以mz的config配的并不完整嘛。至少要配好Width嘛</p>
    <p>
      <!--<template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>-->
      待慢慢学习template的使用呢
    </p>
    <el-table
      :data="tableData4"
      style="width:800px"
      max-height="250">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <h3>5.多级表头。略</h3>
    <p>多级表头的表头颜色倒是不知道哪里来的，难道是默认的</p>
    <h3>6.多选和单选，其实是表格行的色块选择呢</h3>
    <h3>7.排序和筛选</h3>
    <p style="color:red">挺重要，后面补上</p>
    <h3>8.自定义模板</h3>
    <p style="color:red">.......等会儿看咯</p>
    <p>template的slot-scope属性可以拿到scope</p>
    <p>scope包含$index、column列、row行以及store<span style="color:red">????待详细看</span></p>
    <el-table
      :data="tableData8"
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h3>9.其他功能:合并行或列，表尾合计行，展开行，自定义索引</h3>
    <h2>二.API</h2>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      tableData8: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      tableData4: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleEdit(scope) {
      console.log(scope);
    },
    tableRowClassName2({row, rowIndex}) {
      //带状态的表格
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-table .warning-row td{
    background:#f00 !important;
  }

  .el-table .success-row td{
    background: green !important;
    color:white;
  }
</style>
