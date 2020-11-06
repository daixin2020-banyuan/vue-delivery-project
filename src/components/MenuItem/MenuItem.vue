<template>
  <div
    class="category-box"
  >
    <!-- 菜品分类 -->
    <div class="titleText">
      {{ categories.name[`${lang}`] }}
    </div>
    <div class="rectangle"></div>

    <div>
      <FoodItem
        v-for="item in foods"
        :key="item._id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import './MenuItem.scss';
import { mapState } from 'vuex';
import FoodItem from '@/components/FoodItem/FoodItem';
export default {
   name:'MenuComponent',
   components:{
      FoodItem
   },
   props:{
      foods:{
         type:Array,
         required:true,
      },
      categories:{
         type:Object,
         required:true,
      }
   },
   data () {
      return {

      };
   },
   computed: {
      ...mapState({
         /* 控制中英文 */
         'lang': state => state.language.lang,

      }),
   },

};
</script>