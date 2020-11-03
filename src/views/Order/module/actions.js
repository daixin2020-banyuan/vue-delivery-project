
import * as types from '../../../store/mutation-types';
import { order }from '@/request/order';
import { getStorage } from '../../../common/utils';
import router from '../../../router/index';

const actions = {
   async getOrder ({ commit }){
      try {
         if(getStorage('user')){
            commit(types.SHOW_LOADING);
            const id = getStorage('user')._id;

            const list = await order(id);

            commit(types.GET_ORDER,list);

            console.log('list',list);
         }else {
            console.log(1231232131);
            router.push({
               name:'Restaurant'
            });
         }

      } catch (error) {
         // commit(types.GET_ORDER,{ message: error.message });
         console.log('error',error);
      }finally{
         commit(types.HIDE_LOADING);
      }
   }
};

export default actions;