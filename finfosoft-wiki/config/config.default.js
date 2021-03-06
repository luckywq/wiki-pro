const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'publ' +
        'ic')
  };

  exports.mongoose = {
    url: 'mongodb://wiki_user:finfosoft123@121.42.253.149:19908/wiki',
    options: {
    }
  };

  exports.keys = '123456';

  exports.middleware = [
    'access'
  ];

  return exports;
};
