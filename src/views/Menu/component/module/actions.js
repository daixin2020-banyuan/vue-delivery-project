import * as types from '@/store/mutation-types';
import { submit } from '@/Request/submit';

// import { getStorage } from '@/common/utils';

const actions =  {

   async submitOrder ({ commit },data){

      try {
         commit(types.SHOW_LOADING);
         await sleep(500);
         await submit(data);

      } catch (error) {

         console.log(error);
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