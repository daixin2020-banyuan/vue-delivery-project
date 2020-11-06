import actions from './actions';
import mutations from './mutations';
import { getStorage }from '@/common/utils';

const cart = {

   state:{
      cart: getStorage('cart') || []
   },
   actions,
   mutations
};

export default cart;