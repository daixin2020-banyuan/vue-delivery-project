<template>
  <div>
    <div
      class="menu-food-item"
      :style="{opacity: item.available ? '' : 0.5}"
      @click="addCount"
    >
      <div
        v-if="count !== 0"
        class="menu-count"
      >
        <div class="menu-count-text">
          {{ count }}
        </div>
      </div>
      <div
        class="containerBetween"
      >
        <div class="menu-text">
          {{ item.name[`${lang}`] }}
        </div>
        <div class="menu-price">
          {{ item.price | FormatPrice }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './FoodItem.scss';
import { mapState,mapActions } from 'vuex';
import _ from 'lodash';

export default {
   name: 'FoodItem',
   props:{
      item:{
         type:Object,
         required:true,
      }
   },
   computed: {
      ...mapState({
         'lang': state => state.language.lang,
         'cart': state => state.cart.cart
      }),

      /* 菜品计数 */
      count (){
         /* 在购物车中寻找同种的菜品 */
         const index = _.findIndex(this.cart, { _id: this.$props.item._id });
         let length = 0;
         if (index !== -1) {
            const afterGroup = _.groupBy(this.cart, '_id');
            _.forEach(afterGroup, (item, i) => {
               if (i === this.$props.item._id) {
                  length = item.length;
               }
            });
         }
         return length;
      }
   },
   methods: {
      ...mapActions([
         'addCart'
      ]),
      addCount (){
         if(!this.$props.item.available){
            return false;
         }
         this.addCart({ food: this.$props.item });
      }
   },

};
</script>