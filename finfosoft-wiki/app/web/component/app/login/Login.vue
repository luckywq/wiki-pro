<template>
  <div id="wraper">
    <div id="outer">
      <h3>欢迎使用wiki</h3>
      <form>
        <div class="form-group">
          <input type="text" placeholder="请输入账号：" id="username" class="form-control" v-model="username">
        </div>
        <div class="form-group">
          <input type="password" name="" id="pwd" placeholder="请输入密码：" class="form-control" v-model="pwd">
        </div>
        <div class="form-group">
          <input type="button" value="登录" class="form-control" id="login-btn" @click="islogin()">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        pwd: '',
        err: ''
      }
    },

    methods: {
      islogin: function () {
        let url = '/app/api/login';
        let query = {
          'username': this.username,
          'password': this.password
        };
        this.$http.get(url,{params:query}).then(response => {
          console.log(response)
        })
      }
    }
  }
</script>
<style>
  @import "Login.css";
</style>
