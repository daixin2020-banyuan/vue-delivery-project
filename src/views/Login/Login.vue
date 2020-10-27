<template>
  <button @click="handleLogin">
    login
  </button>
</template>

<script>

import { mapActions } from 'vuex';

export default {
   methods:{
      ...mapActions([ 'login' ]),

      handleLogin (){

         this.login();
      }
   }
};
</script>

<style>

</style>
