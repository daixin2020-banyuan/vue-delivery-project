
import * as types from '../../../store/mutation-types';
import { order }from '../../../request/order';

// import { order } from '../../../request/order';

const actions = {
   async getOrder ({ commit }){
      try {
         const id = '5f97db3a756e3f76a7a73a4e';
         commit(types.SHOW_LOADING);

         const list = await order(id);

         commit(types.GET_ORDER,list);

         console.log('list',list);

      } catch (error) {
         // commit(types.GET_ORDER,{ message: error.message });
         console.log('error',error);
      }finally{
         commit(types.HIDE_LOADING);
      }
   }
};

export default actions;