<template>
  <div style="margin-top :100px">
    <button @click="handleLogin">
      login
    </button>
  </div>
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

