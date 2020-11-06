import * as types from '@/store/mutation-types';
import _ from 'lodash';
import { submit } from '@/Request/submit';
import  i18n  from '@/common/I18n/language';

import { getStorage ,cleanStorage,setStorage } from '@/common/utils';

const actions =  {

   /* 添加菜品 */
   async addCart ({ commit },{ food }){
      let cart = [];
      try{
         /* 获取购物车数据 */
         if (_.isEmpty(getStorage('cart'))) {
            cart = [];
         } else {
            cart = getStorage('cart');
         }
         /* 添加数据 */
         cart.push(food);
         commit(types.SAVE_CART, { cart });
         setStorage('cart',cart);
      }catch(error){
         this._vm.$modal.show('error',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }

   },
   /* 删除菜品 */
   async removeCart ({ commit },{ food }){
      commit(types.SHOW_LOADING);
      let cart = [];
      try{
         /* 获取购物车数据 */
         if (_.isEmpty(getStorage('cart'))) {
            cart = [];
         } else {
            cart = getStorage('cart');
         }
         /* 删除 */
         const index = _.findLastIndex(cart, (item) =>
            item._id  === food._id);
         cart.splice(index, 1);
         commit(types.SAVE_CART, { cart });
         setStorage('cart',cart);
      }catch(error){
         this._vm.$modal.show('error',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }

   },

   /* 确认下单 */
   async orderFood ({ commit }){
      commit(types.SHOW_LOADING);
      await sleep(200);
      const user = getStorage('user');
      /* 没有登录,跳转登录页面 */
      if(!user){
         this._vm.$modal.show('error',{ message:i18n.t('error.need-login'),func:()=>{
            this.$router.push('/login');
         } });
         commit(types.HIDE_LOADING);
         return;
      }
      try{
         const data = {
            payment: getStorage('payment').value,
            cart:	getStorage('cart'),
            userId: getStorage('user')._id,
            restaurantId: getStorage('cartId')
         };
         console.log(data);
         await submit(data);

         commit(types.CLEAR_CART);
         cleanStorage('cart');

         this.$router.push('/order');

      }catch(error){

         if(error.code === 'auth-failed'){
            this._vm.$modal.show('error',{ message: error.message,func:()=>{
               cleanStorage('user');
               this.$router.push('/login');
            } });
         }else{
            this._vm.$modal.show('error',{ message:error.message });
         }
      }finally{
         commit(types.HIDE_LOADING);
      }

   }

};

function sleep (time){

   return new Promise((res)=>{

      setTimeout(()=>{
         res();
      },time);
   });
}

export default actions;