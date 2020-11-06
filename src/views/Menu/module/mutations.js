import * as types from '@/store/mutation-types';

const mutations = {
   [types.GET_MENU] (state,data){
      state.menuList.categories = data.categories;
      state.menuList.foods = data.foods;
   },

};

export default mutations;