import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
   locale: 'zh-CN',  // 语言标识
   messages: {
      'zh-CN': require('./langs/zh-CN.json'),
      'en-US': require('./langs/en-US.json')
   }
});

export default i18n;
