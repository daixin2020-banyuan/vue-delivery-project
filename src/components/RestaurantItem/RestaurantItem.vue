<template>
  <div>
    <div
      v-for="item in restList"
      :key="item._id"
    >
      <div class="rest-box">
        <div class="titleText">
          {{ item.name[`${lang}`] }}
        </div>
        <div class="subTitleText">
          {{ $t(`tags.${item.tags}`) }}
        </div>
        <div
          class="img-box"
          @click="func(item)"
        >
          <div class="img-box1">
            <div
              class="rest-food-name"
            >
              {{ foodName[`${lang}`] }}
            </div>
            <div class="rest-image-box">
              <img
                src="../../assets/dark-dish.png"
                class="dish-image"
              >
            </div>
          </div>
          <div class="img-box2">
            <div class="rest-food-name">
              {{ defaultItems[1].name[`${lang}`] }}
            </div>
            <div class="rest-image-box">
              <img
                src="../../assets/dark-dish.png"
                class="dish-image1"
              >
            </div>
          </div>
          <div class="img-box3">
            <div class="rest-food-name">
              {{ defaultItems[2].name[`${lang}`] }}
            </div>
            <div class="rest-image-box">
              <img
                src="../../assets/dark-dish.png"
                class="dish-image1"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex';
import _ from 'lodash';
import './restaurant.scss';

export default {
   name:'RestaurantAssembly',
   data (){
      return{
         defaultItems:[
            {
               name: {
                  'zh-CN': '红烧狮子头',
                  'en-US': 'Stewed Lion Head Chinese Meatballs'
               },
               image: 'https://s3.amazonaws.com/ricepo-food/image-3r7hnd04jyk7nbn3.png'
            },
            {
               name:  {
                  'zh-CN': '三杯鸡',
                  'en-US': 'Three Cups Chicken'
               },
               image: 'https://s3.amazonaws.com/ricepo-food/image-5b7jxyy2jvu95frk.png'
            },
            {
               name: {
                  'zh-CN': '番茄鸡蛋面',
                  'en-US': 'Tomato Egg Noodle'
               },
               image:     'https://s3.amazonaws.com/ricepo-food/image-o1bt3qsjz0fhei4.png'
            }
         ]
      };},
   computed :{
      ...mapState({
         restList:state=>state.restList.restList,
         lang:state=>state.language.lang,
      }),
      foodName (){
         let a = this.restList.forEach(i => {
            _.get(i,'items[0].name',this.defaultItems[0].name);

         });
         return a;
      }

   },
   created (){
      this.getRest();
   },
   methods:{
      ...mapActions([ 'getRest' ]),
      func (item){
         console.log(item.items);
      }
   }
};
</script>

<style lang="scss">

</style>