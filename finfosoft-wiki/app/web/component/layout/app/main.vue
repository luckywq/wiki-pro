<template>
   <div id="main">
     <div id="logo">
       welcome to wiki
     </div>
     <div id="login">
       <span href="javascript:;" v-if="islogin===true" style="margin-right: 10px">欢迎您：<a href="javascript:;">{{ username }}</a></span>
       <a href="javascript:;" v-if="islogin===true" style="margin-right: 10px">我的wiki</a>
       <a href="javascript:;" v-if="islogin===true" @click="signout()">退出登录</a>
       <router-link to="/Login" v-if="islogin===false">登录</router-link>
     </div>
     <router-view/>
   </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'app',
    data () {
      return {
        username: '王琪',
        islogin: false
      }
    },
    methods: {
      signout: function () {
        this.islogin = false;
      }
    }
  }
</script>

<style>
  @import "../../../asset/css/global.css";

  #main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #main > #logo{
    background-color: #000000;
    height:70px;
    width: 100%;
    padding-left: 3%;
    line-height: 70px;
    color: #ffffff;
  }
  #login{
    width: 98%;
    height: 30px;
    line-height: 30px;
    text-align: right;
    padding-right: 2%;
  }
</style>