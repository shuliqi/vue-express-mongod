<template>
  <div class="login">
    <div class="login_main" v-loading="loading" element-loading-text="拼命登录中...">
      <h3>登录</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" >
        <el-form-item  prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入用户名" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item  prop="pass">
          <el-input v-model="ruleForm.pass" placeholder="请输入密码" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name:"login",
  data () {
    return {
      loading:false,
      //表单字段
      ruleForm: {
          name: '',
          pass:''
        },
        //表单验证
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
  },
  created(){
    
  },
  methods:{
    //表单提交函数
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
            this.loading = true
            const baseUrl = this.$store.state.url
            this.$axios.get(baseUrl + '/login',{params:this.ruleForm}).then( 
              res=>{
                console.log("登录成功")
               var data = res.data
                console.log(data)
               if(data.success){
                   console.log("111")
                   console.log(this.$router)
                    this.$router.push({path:'/adminIndex'})
               }
                

            },err =>{
                console.log("失败")
                console.log(err)

            })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
    
  
}
</script>
<style lang="scss" type="text/scss" >
@import "../../static/css/base.scss";
.login{
  width:100%;
  height:100%;
  position:relative;
  background: #f6f6f6;
  .login_main{
   @include ver_cen();
    width:20%;
    padding:20px;
    height: 270px;
    background-color: #ffffff;
    box-shadow: 0px 5px 21px 0 rgba(20, 80, 116, 0.1);
    h3{
      text-align:center;
      font-size:28px;
      color: #40a4e2;
    }
    .el-form{
      margin-top:30px;
      .el-form-item{
        text-align:center;
      }

    }
  }
}












































































</style>
