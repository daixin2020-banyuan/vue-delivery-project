import * as types from '../../../store/mutation-types';

const mutations = {
   [types.GET_REST] (state,data){
      state.restList = data.list;
      console.log('vuex----state',state.restList);
   }
};

export default mutations;