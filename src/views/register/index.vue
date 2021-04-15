<template>
  <div class="register">
    <!-- 
      多条规则验证
      rules 编写变淡验证规则 验证 module 中数据
     -->
    <el-form :rules="rules" :model="user" ref="users">
      <!-- 
        prop 值为是被验证的值，也是 el-input绑定的
       -->
      <el-form-item label="用户名" label-width="80px" prop="username">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px" prop="password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" label-width="80px" prop="surePsd">
        <el-input v-model="user.surePsd" />
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="success" @click="requestRegister('users')"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { register } from "./api.js";
export default {
  name:"Register",
  // components:{
  //   MessageBox,
  //   Message
  // },
  data() {
    return {
      user: {
        username: "", // 用户名字
        password: "", // 密码
        surePsd: "",
      },
      // rulesUsername: {
      //   required: true,
      //   // 只使用
      //   message: "用户输入内容不能为空", // 当message 是动态变化就不行了
      //   type:'blur'
      // },
      // rulesPassword: {
      //   required: true,
      //   message: "密码不能为空",
      // },

      // 表单验证，不是 form-item单独验证
      /*
      rules 规则 Array|Objec,Array 多个验证规则。素组元素为对象，|Object 只有一个验证规则
      required 是否必填
      message  提示信息
      min      最小长度
      max      最大长度
      pattern  正则规则
      trigger  在什么时候验证，例如 获取、失去焦点
      
      
      */
      rules: {
        username: [
          { required: true, message: "用户名不能为空" },
          { min: 6, max: 12, message: "长度为6-12字符", trigger: "blur" },
          {
            pattern: /^\w{6,12}$/,
            message: "请输入数字字母下滑线，长度6+-12",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空" },
          { min: 6, max: 12, message: "长度为6-12字符", trigger: "blur" },
          {
            pattern: /^\w{6,12}$/,
            message: "请输入数字字母下滑线，长度6+-12",
            trigger: "blur",
          },
        ],
        surePsd: [
          { required: true, message: "输入内容不能为空" },
          {
            // 自定义的规则验证
            validator: (rule, value, cb) => {
              // console.log(this);
              if (this.user.password !== value) {
                cb(new Error("两次输入密码不一致"));
              }

              // 验证通过后必须执行cb()
              cb();

              // 自定义验证如果如果不放行。
              // 验证通过后不会执行  el-form.validate.
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 发送注册其：在表单数据验证通过事后发送
    requestRegister: async function (formName) {
      // this.$refs 获取 组件中绑定的 ref属性 的组件[实例].
      // ----> 获取组件中的数据

      this.$refs[formName].validate(async (valid) => {
        // 表单验证完毕后执行
        // valid true 表示el-form组件中所有的prop 验证通过
        // valid false 表示至少有一个prop验证不ton过
        // 注意：如果验证时候使用自定义验证，必须执行callback() 通过不传参，不通过传Error实例
        if (valid) {
          // 发送注册请求
          let data = await register({
            url: "/register",
            data: {
              username: this.user.username,
              password: this.user.password,
            },
          });
          // 注册成功后提示注册成功；
          console.log("注册成功", data);
          // 用户已经存在
          if (data.code == 0) {
            console.log(this);
            console.log(this.$alert);
            // 弹框提示 用户存在；是否去登录
             // 确认登录；
            // 取消保留当前页面
            this.$confirm("用户已经存在，是否去登录", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
            }).then(() => {
               // 点击确认时候触发
              this.$router.push('/login')
            }).catch(()=>{
               this.$message({
                type: "warning",
                message: "已经取消跳转到登录页面",
              });
            });
          }

          // 注册成功 
          if (data.code == 1) {
            this.$message({
              message: "注册成功",
              type: "success",
            });
            // 跳转到登录页面
            this.$router.push("/login");
            return;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },

  
};
</script>


<style scoped>
/* scoped 表示样是私有的；；不会被其他污染； */
.register {
  width: 450px;
  margin: 30px auto;
}
.register form {
  box-shadow: 0px 9px 15px #ccc;
  padding: 20px 35px;
}
.register .btn {
  width: 80%;
  margin-top: 10px;
  margin-left: 10%;
}
</style>