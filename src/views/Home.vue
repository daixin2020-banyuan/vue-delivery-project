<template>
  <div>
    <Login></Login>
    <Hello></Hello>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/views/Login/Login';
import Hello from '@/components/HelloWorld';

export default {
   name: 'Home',
   components: {
      Login,
      Hello
   }
};
</script>
