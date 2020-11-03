
import * as types from '../../../store/mutation-types';
import { rest } from '../../../request/restaurant';

const actions =  {

   async getRest ({ commit }){

      try {

         const data = await rest();

         console.log(data);
         commit(types.GET_REST,data);

      } catch (error) {

         console.log(error);
      }finally{
         commit(types.HIDE_LOADING);
      }
   },
};

export default actions;