import * as types from '@/store/mutation-types';
// import router from '@/router';

const actions =  {

   async login ({ commit }){

      try {

         commit(types.SHOW_LOADING);
         //   router.push('/restaurant');

         await sleep(5000);
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