<!--
 * @Descripttion: vue3 demo
 * @Author: Maorui
 * @Date: 2020-10-29 14:17:38
 * @LastEditTime: 2020-11-11 15:49:33
-->
<template>
  <div class="page">
    <headerNav></headerNav> 
    <HelloWorld msg="Welcome to my Heart."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import headerNav from '@/components/headerNav.vue';
import { onErrorCaptured } from 'vue';

export default {
  name: 'Home',
  setup() {
    onErrorCaptured((err, vm, info) => {
      console.log('onErrorCaptured', err, vm, info);
    });
  },
  components: {
    HelloWorld, headerNav
  },
};
</script>
