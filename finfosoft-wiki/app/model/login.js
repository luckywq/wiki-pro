/**
 * Created by wangqi on 2018/1/9.
 */

module.exports = app => {
  "use strict";
  const moogose = app.mongoose;
  const LoginSchema = new moogose.Schema();
  return moogose.model('Login',LoginSchema,'user');
};