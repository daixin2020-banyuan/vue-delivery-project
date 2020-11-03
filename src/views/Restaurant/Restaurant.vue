<template>
  <div>
    <div>
      <Header></Header>
    </div>

    <div class="header-children">
      <div class="containerBetween">
        <div class="rest-tab">
          所有餐馆
          <div class="rectangle"></div>
        </div>
        <div class="all-rest-box">
          <RestaurantItem></RestaurantItem>

          <div class="rest-gap">
            1233
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../../components/Header/Header';
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';

import '../../style/style.scss';
import './restaurant.scss';

export default {
   name:'Restaurant',
   components:{
      Header,
      RestaurantItem
   }
};
</script>

