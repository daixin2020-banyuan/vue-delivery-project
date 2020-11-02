
import * as types from '../../../../store/mutation-types';
import { register }from '../../../../request/register';
import { encode } from '../../../../common/utils';

// import { order } from '../../../request/order';

const actions = {
   async sendRegist ({ commit },data){
      try {
         console.log(data);

         const { username,password } = data;

         const user = await register( { username:encode(username),password:encode(password) });

         commit(types.REGIST_USER,user);

         console.log('user',user);

      } catch (error) {
         this._vm.$modal.show('errorshow',{ errorMes:error.message });
         console.log('errorshow',{ errorMes:error.message });
      }
   }
};

export default actions;