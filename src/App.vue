<template>
  <div class="App">
    <Home></Home>
  </div>
</template>

<script>

import Home from './views/Home';

export default {
   name:'App',
   components:{
      Home
   }
};
</script>

<style lang="scss">
  .App{
    padding : 0 120px;
  }
</style>
