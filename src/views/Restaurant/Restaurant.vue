<template>
  <div>
    <div class="header-children">
      <div class="containerBetween">
        <div class="rest-tab">
          所有餐馆
          <div class="rectangle"></div>
        </div>
        <div class="all-rest-box">
          <RestaurantItem
            v-for="item in restList"
            :key="item._id"
          ></RestaurantItem>

          <div class="rest-gap">
            1233
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';

import './restaurant.scss';

export default {
   name:'Restaurant',
   components:{
      RestaurantItem

   } }
;
</script>

