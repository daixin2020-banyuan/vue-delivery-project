<template>
  <div class="hello">
    <h1>{{ $t("hello") }}</h1>
    <button @click="swichLangEn">
      英文
    </button>
    <button @click="swichLangCn">
      中文
    </button>
  </div>
</template>

<script>
export default {
   name: 'HelloWorld',
   methods:{
      swichLangEn (){
         this.$i18n.locale = 'en';
      },
      swichLangCn (){
         this.$i18n.locale = 'zh';

      }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  width : 199px;
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
