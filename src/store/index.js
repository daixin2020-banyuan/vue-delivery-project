import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import loading from './loading';

/* page */
import login from '../views/Login/module';
import  order from '../views/Order/module';
import regist from '../components/modal/registModal/module';

/* menu */
import menu from '@/views/Menu/module/index';

/* submit */
import submit from '@/views/Menu/component/module/index';

/* language */
import language from './language';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
   },
   mutations: {
   },
   actions: {
   },
   modules: {
      loading,
      login,
      menu,
      submit,
      language,
      order,
      regist,

   }
});
