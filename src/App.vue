<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
    <Loading></Loading>
    <RegistModal />
    <ErrorModal />
  </div>
</template>

<script>
import Loading from './components/Loading/Loading';
import RegistModal from './components/modal/registModal/registModal';
import ErrorModal from './components/errorModal/errorModal';

export default {
   name:'App',
   components:{
      Loading,
      RegistModal,
      ErrorModal
   }
};
</script>

<style lang="scss">
  .App{
    padding : 0 120px;
  }
</style>
