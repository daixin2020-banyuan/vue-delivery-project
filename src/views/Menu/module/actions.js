import * as types from '@/store/mutation-types';
import { menu } from '@/Request/menu';

const actions =  {
   /* 接收menu页面传来的商店id */
   async getMenu ({ commit },id){

      try {
         commit(types.SHOW_LOADING);

         await sleep(200);

         /* 将商店id传入请求当中 */
         const data = await menu(id);

         commit(types.GET_MENU,data);

      } catch (error) {

         this._vm.$modal.show('errorshow',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   },

};

function sleep (time){

   return new Promise((res)=>{

      setTimeout(()=>{
         res();
      },time);
   });
}

export default actions;