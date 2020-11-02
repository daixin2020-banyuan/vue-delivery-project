import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import loading from './loading';

/* page */
import login from '../views/Login/module';
import  order from '../views/Order/module';
import regist from '../components/modal/registModal/module';

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
      order,
      regist,

   }
});
