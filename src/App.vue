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
