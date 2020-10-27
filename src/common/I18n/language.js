import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
   locale: 'zh',  // 语言标识
   messages: {
      'zh': require('./langs/zh-CN.json'),
      'en': require('./langs/en-US.json')
   }
});

export default i18n;
