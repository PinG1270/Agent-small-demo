<template>
  <div class="register">
    <el-form label-width="80px" :model="userInfo" :rules="rules" ref="wangyuhang">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="userInfo.userName"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密碼">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item prop="checkPassword" label="确认密碼">
        <el-input v-model="userInfo.checkPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="success" @click="register('wangyuhang',$event)">注冊</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import { register } from "@/api/register";
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    // 自定驗證
    // 默認用戶輸入内容触发
    let validataUserName = (rule, value, callback) => {
      console.log(rule);  // 规则对象
      // console.log(value, value.length, "==============="); // input 的value 值
      // console.log(callback)  // 默认传入的函数
      if (value.trim() === "") {
        callback(new Error("请输入用户名"));
      } else {
        var pattern = /^\w{6,12}$/;
        if (pattern.test(value)) {
          callback();
        } else {
          callback(new Error("开头字符大写,6-12位数字字母下化线"));
        }
      }
    };

    let validataPassword = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("请输入密码"));
      } else {
        var pattern = /^[A-Z]\w{5,11}$/;
        if (pattern.test(value)) {
          // 	对部分表单字段进行校验的方法
          // 触发了验证checkPassword 的方法validataCheckPassword
          //   this.$refs.wangyuhang.validateField("checkPassword");
          callback();
        } else {
          callback(new Error("开头字符大写,6-12位数字字母下化线"));
        }
      }
    };
    let validataCheckPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        if (value != this.userInfo.password) {
          callback(new Error("两次输入的密码不一致"));
        }
        callback();
        // console.log("确认面呀");
      }
    };

    return {
      userInfo: {
        userName: "aaa123",
        password: "A12345",
        checkPassword: "A12345",
      },
      rules: {
        userName: [{ validator: validataUserName, trigger: "blur" }],
        password: [{ validator: validataPassword, trigger: "blur" }],
        checkPassword: [{ validator: validataCheckPassword }],
      },
    };
  },
  methods: {
    ...mapActions(["typeFlag"]),
    register(formName) {
      this.$refs[formName].validate((voild) => {
        if (voild) {
          // this.requestRegister(); // 发送注册接口请求
        } else {
          this.$message({
            message: "输入的内容不合法",
            type: "warning",
          });
        }
      });
    },

    // requestRegister() {
    //   // this.loading(true);
    //   let { userName, password } = this.userInfo;
    //   register({
    //     userName,
    //     password,
    //   })
    //     .then(() => {
    //       // 待办;服务端返回状态码处理
    //       // this.loading(false);
    //       // console.log(res);
    //       this.$message({
    //         message: "注册成功",
    //         type: "success",
    //         duration: 500,
    //         onClose: () => {
    //           // message 关闭时候触发
    //           this.$router.push("/home/login");
    //         },
    //       });
    //     })
    //     .catch(() => {
    //       //   loading.close()
    //       // this.loading(false);
    //       this.$message({
    //         message: "注册失败",
    //         type: "error",
    //         duration: 500,
    //         // onClose:()=>{
    //         //   console.log('message 挂壁触发');
    //         // }
    //       });
    //     });
    // },
  },
  activated() {
    // this.showloading()
    // this.hideloaidng()
    this.typeFlag(false);
  },
  deactivated() {
    this.typeFlag(true);
  },
};
</script>

<style>
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
}
</style>