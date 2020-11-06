<template>
  <div>
    <div class="menu-box">
      <!-- 标题 -->
      <div class="titleText">
        {{ name.title[`${lang}`] }}
      </div>
      <!-- 分类 -->
      <div class="sub-titleText">
        <div
          v-for="i in restTags"
          :key="i.id"
        >
          {{ i.tag }}
        </div>
      </div>
      <!-- 菜单页面循环渲染 -->
      <div class="all-category-box">
        <!-- 没有菜品 -->
        <div v-if="renderFoods.length === 0 ">
          {{ $t('menu.no-menu') }}
        </div>
        <!-- 渲染菜品 -->
        <MenuItem
          v-for="item in renderFoods"
          :key="item.categories._id"
          :foods="item.foods"
          :categories="item.categories"
        />
      </div>
    </div>
    <div class="menu-cart">
      <div class="menu-cart-container">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem/MenuItem';
import Cart from '@/components/Cart/Cart';
import {  mapActions ,mapState } from 'vuex';
import { setStorage,getStorage  } from '@/common/utils.js';
import _ from 'lodash';
import * as types from '@/store/mutation-types.js';
import { v4 as uuidv4 } from 'uuid';

import './menu.scss';

export default {
   name:'Menu',
   filters: {
      formatPrice (value) {
         return '$' + value / 100;
      }
   },
   components:{
      MenuItem,
      Cart
   },
   data (){
      return{
         menu:{},
         //  id:this.$route.params.id,
         restItem:this.$route.params.restItem,
         id:this.$route.params.restId,
         //  name: this.restItem.name
      };
   },
   computed:{
      ...mapState({

         /* 种类 */
         'categories':state=>state.menu.menuList.categories,

         /* 菜单详情 */
         'foods':state=>state.menu.menuList.foods,

         /* 语言切换 */
         'lang':state=>state.language.lang,

         /* 菜单标题和分类 */
         'name':state=>state.restTitle.name
      }),

      /* 用lodash重新计算值 否则由于请求是异步操作页面进来取不到item的值会报错 */
      restName (){
         return _.get(this.name.title,`name[${this.lang}]`,'');
      },

      restTags (){
         let restTags = [];
         /* tags是一个数组 遍历tags 根据语言变化 */
         _.forEach(this.name.tags,(item)=>{
            restTags.push({
               tag: this.$t(`tags.${item}`),
               id: uuidv4()
            });
         });
         return restTags;

      },

      /* 重构数据 */
      renderFoods (){
         const menuList = [];

         _.forEach(this.categories,(item)=>{
            /* 找到每一个category中对应的所有foods */
            const categoryId = _.get(item,'_id');
            const foodList = _.filter(this.foods, { category: { _id: categoryId } });
            menuList.push({
               foods: _.orderBy(foodList, [ 'available' ], [ 'desc' ]),
               categories: item
            });

         });
         return menuList;
      },

   },
   created (){

      this.getMenu(this.id);

      /* 进入新餐馆，删除购物车 */
      const cartId = getStorage('cartId');
      if(cartId !== this.id){
         setStorage('cart',[]);
         this.$store.commit(types.CLEAR_CART);
      }
   },

   methods:{
      ...mapActions([ 'getMenu' , 'setCountArray' ]),
      addCount (i){
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

