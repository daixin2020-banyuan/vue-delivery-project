<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
    <Loading></Loading>
  </div>
</template>

<script>
/* components */
import Loading from './components/Loading/Loading';

export default {
   components:{
      Loading
   }
};
</script>
