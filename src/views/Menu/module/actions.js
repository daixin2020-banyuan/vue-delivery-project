import * as types from '@/store/mutation-types';
import { menu } from '@/request/menu';
import _ from 'lodash';
// import { getStorage } from '@/common/utils';

const actions =  {

   async getMenu ({ commit }){

      try {
         // commit(types.SHOW_LOADING);
         // await sleep(2000);
         const data = await menu();
         const menuList = renderMenu(data);
         commit(types.GET_MENU,menuList);

      } catch (error) {

         console.log(error);
      }finally{
         commit(types.HIDE_LOADING);
      }
   },

   setCountArray ({ commit },data){
      // if(getStorage('cart')){
      //    data = getStorage('cart');
      // }
      commit(types.SET_COUNTARRAY, data);
   },
   delCountArray ({ commit },index){

      commit(types.DEL_COUNTARRAY, index);
   },

};

// function sleep (time){

//    return new Promise((res)=>{

//       setTimeout(()=>{
//          res();
//       },time);
//    });
// }

function renderMenu (data){
   let categories = data.categories;
   let foods = data.foods;
   let arr = [];
   _.forEach(categories, function (i) {
      let a =  _.filter(foods,((j)=>{
         return i._id === j.category._id;
      }));
      _.forEach(a,(item)=>{
         item.count = 0;
      });

      arr.push({
         foods:a,
         category:i,
      });
   });

   let arrFinal =  _.forEach(arr,(j)=>{
      _.forEach(j.foods,(k)=>{
         _.orderBy(k,[ 'k.available' ] ,[ 'desc' ]);
      });
   });
   return  arrFinal;
}
export default actions;