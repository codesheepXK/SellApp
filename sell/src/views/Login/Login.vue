<template>
    <div class="loginBox">
        <mt-header title="用户登录">
        <router-link to="#" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>
        <mt-field 
            type="text"
            placeholder="请输入电话号码"
            label="电话号码"
            @blur.native.capture="checkPhone"
            v-model="phone"
            :state="phoneState"
        >
        </mt-field>

        <mt-field
            type="password"
            placeholder="请输入密码"
            label="密码"
            @blur.native.capture="checkPwd"
            v-model="pwd"
            :state="pwdState"
        >
        </mt-field>  
         <mt-button
            size="large"
            type="primary"
            @click.native.capture="checkForm"
            :disabled="
                this.phoneState !== 'success' ||
                this.pwdState !== 'success' 
            "
            >立即登录
        </mt-button>  
        
        <mt-button
            @click.native.capture="toResgiterUser"
            size="large"
            type="primary"
            >注册顾客账号
        </mt-button>
        <mt-button
            @click.native.capture="toResgiterShop"
            size="large"
            type="primary"
            >注册商户账号
        </mt-button>
    </div>

</template>

<script>
export default {
  data() {
    return {
      phone:"",
      phoneState:"", 
      pwd: "",
      pwdState: "",
    };
  },
  methods: {
    toResgiterUser(){
      this.$router.push('/registerUser')
    },
    toResgiterShop(){
      this.$router.push('/registerShop')
    },
    checkPhone() {
      // 验证电话号
      let exp = /\d{3}-\d{8}|\d{4}-\d{7}|^1(3[0-9]|4[57]|5[0-35-9]|7[0678]|8[0-9])\d{8}$/;
      if (exp.test(this.phone)) {
        this.phoneState = "success";
        return true;
      } else {
        this.phoneState = "error";
        return false;
      }
    },
    checkPwd() {
      // 验证密码
      let exp = /^\d{6,15}$/;
      if (exp.test(this.pwd)) {
        this.pwdState = "success";
        return true;
      } else {
        this.pwdState = "error";
        return false;
      }
    },
    // 给注册按钮绑定事件
    checkForm() {
      if (this.checkPhone() && this.checkPwd()) {
        alert("登陆成功...");
        this.$router.push('/')
        return false;
      } else {
        alert("登录失败...");
        return true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.loginBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mint-header{
    width: 100%;
    height: 8vh;
    font-size:20px ;
    margin-bottom: 10px;
}
.mint-cell{
    width: 80%;
    box-sizing: border-box;
    border-top: 1px solid rgb(227, 227, 227);
    border-bottom: 1px solid rgb(227, 227, 227);
    margin:10px 5px;
    :deep(.mint-cell-wrapper){
        background-image: none;
    }
}

.mint-button{
    width: 70%;
    margin: 10px 0;
    border-radius: 5px;
}
a{
    text-decoration: none;
    color: inherit;
}
</style>