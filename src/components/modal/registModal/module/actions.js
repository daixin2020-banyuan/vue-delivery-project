
import * as types from '../../../../store/mutation-types';
import { register }from '../../../../request/register';
import { encode } from '../../../../common/utils';

// import { order } from '../../../request/order';

const actions = {
   async sendRegist ({ commit },data){
      try {
         console.log(data);
         // let { username,password } = data;

         const { username,password } = data;

         const user = await register( { username:encode(username),password:encode(password) });

         commit(types.REGIST_USER,user);

         console.log('user',user);

      } catch (error) {
         // commit(types.GET_ORDER,{ message: error.message });
         console.log('error',error);
      }
   }
};

export default actions;