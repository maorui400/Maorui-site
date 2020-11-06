<!--
 * @Descripttion: vue3 demo
 * @Author: Maorui
 * @Date: 2020-10-29 14:17:38
 * @LastEditTime: 2020-11-04 09:34:24
-->
<template>
  <div class="home">
    <HelloWorld msg="vue 3.0 demo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { onErrorCaptured } from 'vue';

export default {
  name: 'Home',
  setup() {
    onErrorCaptured((err, vm, info) => {
      console.log('onErrorCaptured', err, vm, info);
    });
  },
  components: {
    HelloWorld,
  },
};
</script>
