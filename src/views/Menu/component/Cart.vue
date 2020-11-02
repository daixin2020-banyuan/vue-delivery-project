<template>
  <div :class="[flagShow ? 'menu-cart-container-expand':'menu-cart-container']">
    <div
      v-show=" flagShow ===true"
      class="cartLeft"
    >
      <img
        alt=""
        src="@/assets/logo.png"
      >

      <!-- 支付方式 -->
      <div class="containerRowAlign">
        <div class="containerRowAlign-select">
          <section class="light">
            <h1>请选择支付方式</h1>

            <label style="margin-top :20px">
              <input
                ref="alipay"
                type="radio"
                name="light"
                checked
                @click="paymentMethod('alipay')"
              >
              <span class="design"></span>
              <span class="text">
                <img src="@/assets/alipay.png">
              </span>
            </label>

            <label>
              <input
                ref="wechat"
                type="radio"
                name="light"
                @click="paymentMethod('wechat')"
              >
              <span class="design"></span>
              <span class="text">
                <img src="@/assets/wechatpay.png">
              </span>
            </label>

            <label>
              <input
                ref="applePay"
                type="radio"
                name="light"
                @click="paymentMethod('applePay')"
              >
              <span class="design"></span>
              <span class="text">
                <img src="@/assets/applepay.png">
              </span>
            </label>
          </section>
        </div>
      </div>
    </div>
    <!-- 支付方式结束 -->

    <!-- 关闭按钮 -->
    <button
      v-show="flagShow == true"
      class="menu-cart-closed"
      @click="closePayment"
    >
      <img
        alt=""
        src="@/assets/close_btn.png"
        class="menu-cart-closed-btn cursor"
      >
    </button>
    <!-- 关闭按钮 -->

    <div :class="[ flagShow ? 'menu-cart-main-container-expand' : 'menu-cart-main-container']">
      <div
        v-if="orderItems.length >0"
        class="cart-details-container"
      >
        <div
          v-for="item in orderItems "
          :key="item.id"
        >
          <div
            v-show="item.count>0"
            class="container-between vertical cart-item"
          >
            <div class="cart-item-name">
              {{ item.name[`${lang}`] }}
            </div>
            <div class="container-row">
              <div class="cart-item-price">
                {{ item.price * item.count|formatPrice }}
              </div>
              <button
                class="cart-remove-button"
                @click="delItem(item)"
              >
                -
              </button>
              <div class="cart-item-count">
                {{ item.count }}
              </div>
              <button
                class="cart-add-button"
                @click="addItem(item)"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="cart-empty-text"
      >
        选择加入购物车
      </div>

      <div
        v-show="flagShow === true"
        class="menu-cart-total"
      >
        <div> 总价: </div>
        <div>
          {{ totalPrice | formatPrice }}
        </div>
      </div>

      <div>
        <button
          v-if="orderItems.length == 0"
          style="background : #afafaf"
          class="menu-cart-subtotal-btn"
          disabled
        >
          $0
        </button>
        <button
          v-else-if="flagShow == true"
          class="menu-cart-subtotal-btn"
          @click="confirmPayment"
        >
          确认下单
        </button>
        <button
          v-else
          class="menu-cart-subtotal-btn"
          @click="submit"
        >
          {{ totalPrice | formatPrice }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import './cart.scss';
import {  mapActions ,mapState } from 'vuex';
import _ from 'lodash';
import { setStorage ,getStorage } from '@/common/utils.js';

export default {
   name:'Cart',
   filters: {
      formatPrice (value) {
         return '$' + value / 100;
      }
   },

   data (){
      return{
         flagShow: false,
         value:  'alipay' || getStorage('payment').value
      };
   },
   computed:{
      ...mapState({
         menuList: state=>state.menu.menuList,
         lang:state=>state.language.lang,
         count:state=>state.menu.count

      }),
      orderItems (){

         const orderItems = _(this.count)
            .uniq(i=>i._id)
            .value();
         //  if(getStorage('cart')){
         //     if(orderItems == ''){
         //        return getStorage('cart');
         //     }else{
         //        return orderItems;
         //     }
         //  }else{
         //     return orderItems;
         //  }

         return orderItems;

      },

      totalPrice (){
         let a  = 0;
         _.forEach(this.orderItems,(i)=>{
            a += i.count * i.price;
         });
         return a;
      }

   },
   created (){
   },

   methods:{
      ...mapActions([ 'setCountArray' ,'delCountArray','submitOrder' ]),
      addItem (i){
         i.count += 1;
         this.setCountArray(i);
         setStorage('cart',this.count);
      },
      delItem (i){
         if(i.count > 0){
            i.count -= 1;
            let index = _.findIndex(this.count,(item)=>{

               return item._id == i._id;

            });
            this.delCountArray(index);
            setStorage('cart',this.count);

         }
      },
      submit (){
         this.flagShow = true;
      },
      paymentMethod (value){
         this.value = value;
      },
      closePayment (){
         this.flagShow = false;
      },
      async confirmPayment (){
         setStorage('payment',{ value:this.value });
         let data = {
            payment:getStorage('payment'),
            cart:getStorage('cart'),			// 全部菜品平铺
            userId:'59879867376b1e0011183f83',	// 用户id
            restaurantId:'59879867376b1e0011183f83' // 餐馆id
         };
         this.submitOrder(data);
         this.$router.push({
            path:'/order'
         });
      },
      paymentSetLocal (){
         this.$refs[`${this.value}`].checked = true;
      }

   }

};
</script>

<style>

</style>