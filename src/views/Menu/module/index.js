import actions from './actions';
import mutations from './mutations';
import { getStorage } from '@/common/utils';

const menu = {

   state:{
      menuList :  getStorage('menuList') || {} ,
      count:  getStorage('cart') || []
      // menuList:{},
      // count:[]
   },
   actions,
   mutations
};

export default menu;