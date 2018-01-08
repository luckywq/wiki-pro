import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from 'component/app/router';
import app from './app.vue';
import App from 'app';
import Layout from 'component/layout/app';
import Vue from 'vue';

App.component(Layout.name, Layout);

sync(store, router);

const DEBUG_MODE = true;
Vue.prototype.URL_PREFIX = DEBUG_MODE ? 'http://127.0.0.1:7001' : '';

export default App.init({
  base: '/finfosoft-wiki',
  ...app,
  router,
  store
});
