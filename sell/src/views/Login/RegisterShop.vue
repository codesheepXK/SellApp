<template>
  <div class="registerBox">
    <!-- 标题栏 -->
    <mt-header title="商户注册">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      
    </mt-header>


    <mt-field
      type="text"
      placeholder="请输入联系方式"
      label="联系方式"
      @blur.native.capture="checkPhone"
      v-model="phone"
      :state="phoneState"
    ></mt-field>

    <mt-field
      type="text"
      placeholder="请输入商店名"
      label="商店名"
      @blur.native.capture="checkName"
      v-model="name"
      :state="nameState"
    ></mt-field>

    <mt-field
      type="password"
      placeholder="请输入密码"
      label="密码"
      @blur.native.capture="checkPwd"
      v-model="pwd"
      :state="pwdState"
    ></mt-field>
 
    <mt-field
      type="password"
      placeholder="请确认密码"
      label="确认密码"
      @blur.native.capture="checkRePwd"
      v-model="rePwd"
      :state="rePwdState"
    ></mt-field>

    <mt-field 
      label="商店地址" 
      placeholder="请输入你的商店所在地" 
      type="textarea" 
      rows="1"
      v-model="site"
    >
    </mt-field>  

    <mt-field 
      label="商店简介" 
      placeholder="请简要介绍你的商店" 
      type="textarea" 
      rows="2" 
      v-model="introduction"
    >
    </mt-field>  

    <mt-button
      size="large"
      type="primary"
      @click.native.capture="checkForm"
      :disabled="
        this.nameState !== 'success' ||
        this.pwdState !== 'success' ||
        this.rePwdState !== 'success'
      "
      >立即注册</mt-button>

      
  </div>
</template>

<script>

export default {
  data() {
    return {
      //state表示状态
      phone:"",
      phoneState:"",
      name: "", 
      nameState: "", 
      pwd: "",
      pwdState: "",
      rePwd: "",
      rePwdState: "",
      site:"",
      introduction:"",
      sendBy:"",
      isPlatform:true
    };
  },
  methods: {
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
    checkName() {
      // 验证商户名
      let exp = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
      if (exp.test(this.name)) {
        this.nameState = "success";
        return true;
      } else {
        this.nameState = "error";
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
    checkRePwd() {
      // 验证确认密码
      let exp = /^\d{6}$/;
      if (exp.test(this.pwd) && this.pwd == this.rePwd) {
        this.rePwdState = "success";
        return true;
      } else {
        this.rePwdState = "error";
        return false;
      }
    },
    // 给注册按钮绑定事件
    checkForm() {
      if (this.checkPhone()&&this.checkName() && this.checkPwd() && this.checkRePwd()) {
        alert("注册成功...");
        return false;
      } else {
        alert("注册失败...");
        return true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.registerBox{
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
</style>