<template>
  <div>
    <Header></Header>
    <div
      class="header-children"
    >
      <div class="containerBetween container-row">
        <div class="order-tab">
          <div class="order-tab-fixed">
            历史订单
            <div class="rectangle"></div>
          </div>
        </div>
        <div class="order-list">
          <div
            v-for="(item, index) in finalarr"
            :key="item.key"
          >
            <OrderItem
              :item="item"
              :index="index"
              :finalarr="finalarr"
            ></OrderItem>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import _ from 'lodash';

/* components Header */
import Header from '../../components/Header/Header';
import OrderItem from '../../components/OrderItem/OrderItem';

import { mapActions,mapState } from 'vuex';

import '../../style/style.scss';
import './Order.scss';

export default {
   name:'Order',
   components:{
      Header,
      OrderItem
   },
   data (){
      return{
         //  changeStyle:false,
      };
   },
   computed:{
      ...mapState({
         'orderList': state => state.order.orderList,
      }),
      finalarr () {
         this.orderList.forEach(obj => {

            this.$set(obj, 'show', false);

            // return _.groupBy(obj.cart,'obj.cart._id');
            const result = _.groupBy(obj.cart,'_id');

            return result;
            // obj.cart = result;
         });
         return this.orderList;
      }

   },
   created (){

      this.getOrder();
   },
   methods: {
      ...mapActions([ 'getOrder' ]),

   },

};
</script>
