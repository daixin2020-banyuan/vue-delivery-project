import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '../src/common/I18n/language';
import Moment from 'moment';

import VModal from 'vue-js-modal';

Vue.config.productionTip = false;

Vue.use(VModal, { dynamic: true, injectModalsContainer: true, dynamicDefaults: { clickToClose: true } });

Vue.filter('globalFormatTime', value => {

   let time = Moment(value).format('YYYY-MM-DD  H:mm');
   return time;
});

/* 金额样式过滤器 */

Vue.filter('FormatPrice', (value) => {
   value = (value / 100).toFixed(2);
   return '$' + value;
});

new Vue({
   router,
   store,
   i18n,
   render: h => h(App)
}).$mount('#app');
