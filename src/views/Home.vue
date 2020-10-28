<template>
  <div>
    <Header></Header>
    <Login></Login>
    <Loading></Loading>
  </div>
</template>

<script>
// @ is an alias to /src

/* components */
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';

/* views */
import Login from '@/views/Login/Login';

export default {
   name: 'Home',
   components: {
      Login,
      Header,
      Loading
   }
};
</script>
