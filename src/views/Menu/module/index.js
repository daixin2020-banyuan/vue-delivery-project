import actions from './actions';
import mutations from './mutations';
// import { getStorage } from '@/common/utils';

const menu = {

   state:{
      menuList:{
         categories:[],
         foods:[]
      }
   },
   actions,
   mutations
};

export default menu;