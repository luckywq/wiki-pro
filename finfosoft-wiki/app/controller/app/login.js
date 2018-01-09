/**
 * Created by wanqgi on 2018/1/9.
 */

module.exports = app => {
  "use strict";
  class LoginController extends app.Controller {
    * index () {
      this.ctx.session.user=null;
      yield this.ctx.render('Login');
    }
  }

  return LoginController;
};

