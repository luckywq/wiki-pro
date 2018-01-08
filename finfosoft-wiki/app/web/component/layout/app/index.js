import MainLayout from './main';

const tpl = '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';

export default {
  name: 'AppLayout',
  props: [ 'title', 'description', 'keywords' ],
  components: {
    MainLayout
  },
  computed: {
    vTitle() {
      return this.$root.title || this.title || '智信远景wiki';
    },
    vKeywords() {
      return this.$root.keywords || this.keywords || '智信远景、wiki、在线技术文档';
    },
    vDescription() {
      return this.$root.description || this.description || '北京智信远景在线wiki平台，为内部人员提供在线查看，编写，收藏等功能的技术平台';
    },
    baseClass() {
      return this.$root.baseClass;
    }
  },
  template: EASY_ENV_IS_BROWSER ? tpl : `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <title>{{vTitle}}</title>
                    <meta name="keywords" :content="vKeywords">
                    <meta name="description" :content="vDescription">
                    <meta http-equiv="content-type" content="text/html;charset=utf-8">
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
                    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">
                  </head>
                  <body :class="baseClass">
                    ${tpl}
                  </body>
                </html>`

};
