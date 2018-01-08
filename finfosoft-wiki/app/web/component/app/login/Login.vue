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
          <input type="submit" value="登录" class="form-control" id="login-btn" @click="islogin()">
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
        if (this.username === 'wangqi' && this.pwd === 'wangqi0611') {

        }
      }
    }
  }
</script>
<style>
  #wraper{
    width: 100%;
    height: 100%;
    background-color: #cccccc;
    position: absolute;
    left: 0;
    top:0;
  }
  h3{
    font-family: '微软雅黑';
  }

  #wraper>#outer{
    height: 400px;
    position: absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
  }

  form{
    font-family: '微软雅黑';
  }

  @media screen and (min-width : 1366px) {
    #outer{
      width:20%
    }
  }

  @media  screen  and (max-width: 1366px) and (min-width: 800px) {
    #outer{
      width:30%
    }
  }

  @media  screen  and (max-width: 800px) {
    #outer{
      width:70%
    }
  }

  #login-btn{
    background: #F6490D;
    color: #fff;
  }
</style>
