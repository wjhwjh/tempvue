<template>
  <div class="login">
    <div class="login-bg"></div>
    <div class="login-main">
      <div class="login-left">
        <div class="logo">
          <!-- <img :src=logoUrl alt="logo"> -->
          logo
        </div>
      </div>
      <div class="login-right">
        <a-form :form="form">
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="姓名"
          >
            <a-input
              v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your name' }] },
        ]"
              placeholder="请输入姓名"
            />
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="密码"
          >
            <a-input
              v-decorator="[
          'nickname',
          { rules: [{ required: checkNick, message: 'Please input your nickname' }] },
        ]"
              placeholder="请输入密码"
              
            />
          </a-form-item>
          <a-form-item
            :label-col="formTailLayout.labelCol"
            :wrapper-col="formTailLayout.wrapperCol"
          >
            <a-button type="primary" @click="check">登陆</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
 //import logoUrl from "@/assets/img/logo.png";
//console.log(logoUrl);
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 15 }
};
const formTailLayout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 10, offset: 6 }
};
export default {
  data: function() {
    //logoUrl:logoUrl
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    }
  }
};
</script>

<style scoped lang="less">
@import "../../assets/theme/partion/index.less";
.login-left {
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 100px;
    height: 100px;
    border: 1px solid #666;
  }
  .logo > img {
    width: 100%;
    display: block;
  }
}

.login-right{
    padding: 30px 40px;
}
</style>
