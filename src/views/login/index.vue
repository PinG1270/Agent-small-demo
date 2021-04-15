<template>
  <div class="login">
    <el-form :model="user" :rules="rules" ref="login">
      <el-form-item label="用户名" label-width="80px" prop="username">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px" prop="password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="success" @click="requestLogin('login')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'Login',
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: {
          // 自定义验证规则
          validator: function (rule, value, callback) {
            // console.log(rule);  // Object {field: "username",fullField: "username",type: "string"}
            // console.log(value);  // input输入框的value值
            // console.log(callback);  // 回调函数,做有用 输出提示信息。参数为 Error对象
            // callback(new Error('输入内容不能为空'))

            // 1:空
            // 2:长度
            // 3:正则
            let reg = /^\w{6,12}$/;
            if (value.trim() === "") {
              callback(new Error("用户名不能为空"));
            } else if (value.length < 6 || value.length > 12) {
              callback(new Error("长度为6-12为"));
            } else if (!reg.test(value)) {
              callback(new Error("请输入数字字母下滑线，长度6+-12"));
            }
            callback();
          },
          trigger: "blur", // 默认是 input事件验证 更改为失去焦点事件验证
        },
        password: [
          { required: true, message: "密码不能为空" },
          { min: 6, max: 12, message: "长度为6-12字符", trigger: "blur" },
          {
            pattern: /^\w{6,12}$/,
            message: "请输入数字字母下滑线，长度6+-12",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 点击登录
    requestLogin(formName) {
      // 当表单中所有 prop 验证通过后；触发actions
      this.$refs[formName].validate(async (valid) => {
        if (valid) { // 表单验证通过
          let options={
            url:'/login',
            data:{
              ...this.user
            }
          }
          // 触发login 中actions下login方法 让 action发送登录请求
          let loginState = await this.$store.dispatch("login/loginAction",options);
          if(loginState){
            this.$message({
              type:'success',
              message:'登录成功'
            })
            this.$router.push('/home')
          }else{
            this.$message({
              type:'error',
              message:'登录失败，用户名或者密码错误'
            })
          }
        }
      });
    },
  },
};
</script>


<style scoped>
/* scoped 表示样是私有的；；不会被其他污染； */
.login {
  width: 450px;
  margin: 30px auto;
}
.login form {
  box-shadow: 0px 9px 15px #ccc;
  padding: 20px 35px;
}
.login .btn {
  width: 80%;
  margin-top: 10px;
  margin-left: 10%;
}
</style>