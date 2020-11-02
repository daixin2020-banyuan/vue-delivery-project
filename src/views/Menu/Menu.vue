<template>
  <div>
    <div class="menu-box">
      <div class="title-text">
        好吃煎饼・东村
      </div>
      <div class="sub-title-text">
        煎饼
      </div>
      <div class="all-category-box">
        <div
          v-for="item in menuList "
          :key="item.id"
          class="category-box"
        >
          <div>
            <div class="title-text">
              {{ item.category.name[`${lang}`] }}
            </div>
            <div
              class="rectangle"
              style="position : relative; left : 0px;"
            ></div>
          </div>

          <div
            v-for="i in item.foods "
            :key="i.id"
            class="menu-food-item cursor"
          >
            <div>
              <div
                v-show="i.count>0"
                class="menu-count"
              >
                <div

                  class="menu-count-text"
                >
                  {{ i.count }}
                </div>
              </div>
              <div
                class="container-between cursor"
                @click="addCount(i)"
              >
                <div
                  class="menu-text cursor"
                  :style="{ opacity : i.available ? 1 : 0.2}"
                >
                  {{ i.name[`${lang}`] }}
                </div>
                <div
                  class="menu-price cursor"
                  :style="{ opacity : i.available ? 1 : 0.2}"
                >
                  {{ i.price|formatPrice }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart></Cart>
    </div>
  </div>
</template>

<script>
import Cart from './component/Cart';
import {  mapActions ,mapState } from 'vuex';
import { setStorage  } from '@/common/utils.js';

import './menu.scss';
export default {
   name:'Menu',
   filters: {
      formatPrice (value) {
         return '$' + value / 100;
      }
   },
   components:{
      Cart
   },
   data (){
      return{
         menu:{},

      };
   },
   computed:{
      ...mapState({
         menuList: state=>state.menu.menuList,
         lang:state=>state.language.lang,
         count:state=>state.menu.count
      }),

   },
   created (){
      this.getMenu();
   },
   methods:{
      ...mapActions([ 'getMenu' , 'setCountArray' ]),
      addCount (i){
         setStorage('cartId',i._id);
         setStorage('cart',this.count);
         setStorage('menuList',this.menuList);
         if(i.available === true){
            i.count += 1;
            this.setCountArray(i);
         }

      }

   }

};
</script>

