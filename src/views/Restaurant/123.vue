<template>
  <div class="restaurant">
    <div class="restaurant-container">
      <div class="rest-tab">
        <h1>{{ $t('restaurant.allRestaurant') }}</h1>
        <div class="rectangle"></div>
      </div>
      <div class="rest-boxs">
        <!-- 循环输出各个餐馆 按奇偶数分两列 -->
        <div>
          <RestItem
            v-for="item in splitColumns.leftColumn"
            :key="item._id"
            :item="item"
          ></RestItem>
        </div>
        <div class="rightColumn">
          <RestItem
            v-for="item in splitColumns.rightColumn"
            :key="item._id"
            :item="item"
          ></RestItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
// import moment from 'moment-timezone';
import { checkRestaurantClosed } from '@/common/utils.js';
import RestItem from '@/components/RestaurantItem/RestaurantItem';
import { mapActions,mapState } from 'vuex';
export default {
   name:'Restaurant',
   components: {
      RestItem
   },
   data () {
      return {

      };
   },
   computed: {
      ...mapState({
         'list': state => state.restaurant.restList
      }),
      /* 按奇偶数分两列 */
      splitColumns (){
         const restList = this.sortRestList(this.list);
         const leftColumn = [];
         const rightColumn = [];
         _.forEach(restList,(item,index)=>{
            if(index % 2 === 0){
               leftColumn.push(item);
            }else{
               rightColumn.push(item);
            }
         });
         return{
            leftColumn,
            rightColumn
         };
      }
   },
   created () {
      this.setRestList();
   },
   methods: {
      ...mapActions([
         'setRestList'
      ]),
      /* 排序 */
      sortRestList (list){
         /* 根据开优先推荐,喜爱度排序 */
         const restList =  _.orderBy(list,[ 'featured','zscore' ],[ 'desc','desc' ]);
         /* 根据开关门排序 */
         const openedRestaurant = [];
         const closedRestaurant = [];
         _.forEach(restList,(item)=>{
            /* 验证餐馆是否关闭 */
            if(checkRestaurantClosed(item)){
               openedRestaurant.push(item);
            }else{
               closedRestaurant.push(item);
            }
         });
         return _.concat(openedRestaurant, closedRestaurant);

      },
   },
};
</script>

<style scoped lang="scss">
@import './restaurant'
</style>