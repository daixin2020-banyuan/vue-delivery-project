import * as types from '@/store/mutation-types';
const mutations = {
   [types.SAVE_CART] (state,data){
      state.cart = data.cart;
   },
   [types.CLEAR_CART] (state){
      state.cart = [];
   }

};

export default mutations;