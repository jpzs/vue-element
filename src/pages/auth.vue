<template>
  <div style="overflow:hidden" class="fill-position">
    <div id='admin-login-bg' class="fill-position"></div>
    <div id="admin-login" class="fill-position">
      <div id="admin-login-form">
        <div class="form-top flex center">
          <img src="../assets/login-logo.png" alt="">
        </div>
        <div class="form-bottom flex center">
          <el-form label-position="left">
            <el-form-item>
              <el-input auto-complete="on" placeholder="用户名" name='username' v-model="auth.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input auto-complete="on" placeholder="密码" name='password' type='password' v-model="auth.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class='submit-button' type="primary" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      auth: {
        name: '',
        password: '',
        vercode: ''
      }
    }
  },
  methods: {
    login() {
      this.$router.push({ name: 'welcome' })
    },
    getCaptcha() {
      // 验证码部分
      // const vercode = document.getElementById('auth-vercode')
      // this.$http.get('captcha-img').then(res => {
      //   vercode.innerHTML = res
      // })
    }
  },
  mounted() {
    // this.getCaptcha()
    console.log('current env', process.env.NODE_ENV)
    this.$message({
      showClose: true,
      message: '无需帐号密码直接点击下方登录'
    })
  }
}
</script>
<style lang="stylus">
#auth-vercode
  display: inline-block
  height: 30px
#admin-login-form
  width: 500px
  height: 360px
  background: #fff
  .el-input__inner
    height: 30px
  .form-top
    height: 100px
    background: #fbfbfb
    border-bottom: solid #f1f1f1 1px
  .form-bottom
    height: 260px
    padding-top: 20px
    form
      width: 200px
  .submit-button
    width: 100%
#admin-login-bg
  background-image: url('../assets/login-bg.jpg')
  background-size: cover
  animation-name: small
  animation: breathing 10s ease-out infinite
#admin-login
  display: grid
  justify-items: center
  align-items: center
@keyframes breathing
  0%
    -webkit-transform: scale(1)
    -ms-transform: scale(1)
    transform: scale(1)
  60%
    -webkit-transform: scale(1.1)
    -ms-transform: scale(1.1)
    transform: scale(1.1)
  100%
    -webkit-transform: scale(1)
    -ms-transform: scale(1)
    transform: scale(1)
</style>
