/**
 * Created by wangqi on 2018/1/9.
 */
module.exports = app => {
  "use strict";
  class LoginController extends app.Controller {
    * index () {
      let username = this.ctx.query.username;
      let password = this.ctx.query.password;

      let params = {};
      params['username'] = this.ctx.query.username;
      let user = yield this.ctx.model.Login.findOne(params);
      let count = yield this.ctx.model.Login.count(params);
      let message,code;
      if (count < 1) {
        code = 40001;
        message = '账号不存在';
      } else {
        const role = user.toJSON().system;
        const system = 'wiki';
        let takePassword = user.toJSON().password;
        if (password !== takePassword) {
          code = 40001;
          message = '账号与密码不匹配';
        }else {
          if (role.indexOf(system) === -1) {
            code = 40001;
            message = '登录失败'
          }else {
            this.ctx.session.user = user;
            code = 200;
            message = '登录成功';
          }
          this.ctx.body = {
            'code':code,
            'message':message
          }
        }
      }
    }
  }
  return LoginController;
};
