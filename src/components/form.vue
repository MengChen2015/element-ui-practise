<template>
  <div style="padding-bottom:280px;">
    <h3>一.表单校验</h3>
    <div>
      <img src="../assets/form_1.png" width="500"/>
    </div>
    <ul>
      <li>
        1.结构:el-form是最外层，每一行的表格由el-form-item包裹，然后使用对应的输入框
      </li>
      <li>
        2.<span style="color:red;">label控制左边的label文字,代码如下:</span>
      </li>

      <br/>
      el-form-item label="活动名称"
      <br/>
      el-input

      <br/>
      <span style="color:red;">结果如下:</span><span><img src="../assets/form_2.png"/></span>
      <br/>
      label-width="100px"之后，就会变成一行了。否则label占一整行。
      <br/>
      style的scoped下样式也是可以的。el-form的类.practise-form定义了表格的总体宽度 <br/>
      .practise-form {
      width:460px;
      <br/>
      <li>
        <div>3.要使得报错提示有效</div>
        (1)必须在el-form-item中使用prop属性，prop=name。并且el-input的v-model="ruleForm.name"的
        name也要和prop=name对应起来哦。
        (2)el-form必须绑定:model="ruleForm"，否则会发现报错提示不正常。
        (3)rules绑定放在el-form和el-input都是OK的哦
        (4)补充:v-model="ruleForm.name2"可以不能省略为name2哦(????)
        </li>
    </ul>



    <div>
       <el-form :model="ruleForm" class="practise-form"  :rules="rules">
         <el-form-item label="活动名称"
                       label-width="100px" prop="name">
           <el-input v-model="ruleForm.name"/>
         </el-form-item>
       </el-form>
      <el-form
        :model="ruleForm"
        class="practise-form"
        :inline="true"
        :inline-message="true" >
        <el-form-item label="活动名称"

                      :rules="[{ required: true, message: '请输入活动名称', trigger: 'blur' }
          ]"
                      label-width="100px" prop="name2"

        >
          <el-input v-model="ruleForm.name2" clearable/>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data () {
      return {
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ]
        },
        ruleForm:{
          name:"123",
          name2:""
        }
      }
    },
    methods: {
    },
  }
</script>

<style scoped>
   .practise-form {
     width:460px;
   }
</style>
