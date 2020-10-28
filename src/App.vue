<template>
  <div id="app">
    <div id="nav">
    </div>
    <Header></Header>
    <div class="header-children">
      <router-view />
    </div>
    <Loading></Loading>
    <RegistModal />
    <ErrorModal />
  </div>
</template>

<script>
import Loading from './components/Loading/Loading';
import RegistModal from './components/modal/registModal/registModal';
import ErrorModal from './components/errorModal/ErrorModal';
import Header from './components/Header/Header';

export default {
   name:'App',
   components:{
      Loading,
      RegistModal,
      ErrorModal,
      Header
   }
};
</script>

<style lang="scss">
  .App{
    padding : 0 120px;

  }
  .header-children{
      position : relative;
      top :100px;
  }

</style>
