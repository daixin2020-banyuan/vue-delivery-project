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
            <h1>{{ $t("menu.choose-payment") }}</h1>

            <label style="margin-top :20px">
              <input
                ref="alipay"
                type="radio"
                name="light"
                :checked="value=='alipay' ? true : false"
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
                :checked="value=='wechat' ? true : false"
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
                :checked="value=='applePay' ? true : false"
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
        v-if="orderItems.length > 0"
        class="cart-details-container"
      >
        <CartItem
          v-for=" items in orderItems"
          :key="items._id"
          :items="items"
          :showbtn="true"
        />
      </div>
      <div
        v-else
        class="cart-empty-text"
      >
        {{ $t("menu.cartTitle") }}
      </div>

      <div
        v-show="flagShow === true"
        class="menu-cart-total"
      >
        <div> {{ $t("menu.total") }}: </div>
        <div>
          {{ totalPrice | FormatPrice }}
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
          {{ $t("menu.place-order") }}
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
    <errorModal></errorModal>
  </div>
</template>

<script>

import {  mapActions ,mapState } from 'vuex';
import CartItem from '@/components/CartItem/CartItem';
import _ from 'lodash';
import { setStorage ,getStorage } from '@/common/utils.js';
import errorModal from '@/components/errorModal/ErrorModal';

export default {
   name:'Cart',
   components:{
      CartItem,
      errorModal

   },

   data (){
      return{
         flagShow: false,
         value:   getStorage('payment').value || 'alipay'
      };
   },
   computed:{
      ...mapState({
         'lang':state=>state.language.lang,
         'cart':state=>state.cart.cart

      }),

      orderItems (){
         /* 购物车为空 */
         if(_.isEmpty(this.cart)){
            return [];
         }
         /* 获取购物车数据 */
         const groupCart = _.groupBy(this.cart, (item) => item._id);
         return _.toArray(groupCart);
      },

      totalPrice (){
         let totalPrice  = 0;
         _.forEach(this.orderItems,(i)=>{
            totalPrice +=  i[0].price * i.length;
         });
         return totalPrice;
      }

   },
   created (){
      // this.paymentSetLocal();
   },
   updated (){
      // console.log(this.orderItems);

   },

   methods:{
      ...mapActions([ 'orderFood','addCart','removeCart' ]),

      submit (){
         this.flagShow = true;
      },
      paymentMethod (value){
         this.value = value;
         console.log(this.$refs[`${this.value}`].checked);
         setStorage('payment',{ value:this.value });

      },
      closePayment (){
         this.flagShow = false;
      },
      paymentSetLocal (){
         this.$refs[`${this.value}`].checked = true;
      },
      async confirmPayment (){
         setStorage('payment',{ value:this.value });

         if(!getStorage('user')){
            this.$modal.show('errorshow',{
               message:this.$t('error.auth-failed') ,
               func:()=>{
                  this.$router.push({
                     path:'/login'
                  });
               }
            });
         }else{
            this.orderFood();

         }

      },

   }

};
</script>

<style lang='scss' scoped>
@import './cart.scss';
</style>