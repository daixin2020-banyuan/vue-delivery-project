<template>
  <div class="hello">
    <h1>{{ $t("hello") }}</h1>
    <p>{{ $t("login.error.name") }}</p>
    <p>{{ $t('tags.bbq') }}</p>
    <button @click="swichLangEn">
      英文
    </button>
    <button @click="swichLangCn">
      中文
    </button>
    <button @click="sendRequest">
      自定义Error
    </button>
  </div>
</template>

<script>
import { order } from '@/request/order.js';

export default {
   name: 'HelloWorld',
   methods:{
      swichLangEn (){
         this.$i18n.locale = 'en';
      },
      swichLangCn (){
         this.$i18n.locale = 'zh';
      },
      async sendRequest (){

         try {
            await order();
         } catch (error) {
            console.log(error);
         }

      }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  width :  199px;
  height : 100px;
  margin : 40px 0 0;
  columns : 1;
}
ul {
  padding : 0;
  list-style-type : none;
}
li {
  display : inline-block;
  margin : 0 10px;
}
a {
  color : #42b983;
}
</style>
