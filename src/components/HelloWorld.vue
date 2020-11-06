<!--
 * @Descripttion: vue3 demo
 * @Author: Maorui
 * @Date: 2020-10-29 14:17:38
 * @LastEditTime: 2020-10-30 14:35:47
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{a}}</div>
    <button @click="setA">加A</button>
  </div>
</template>

<script>
import {
  ref,
  onErrorCaptured,
  onRenderTriggered,
} from 'vue';

export default {
  setup(props, context) {
    const a = ref(0);
    const setA = () => { a.value += 1; };
    console.log('props, context', props, context);
    onErrorCaptured(() => { // 错误监控 参考文章 https://zhuanlan.zhihu.com/p/37404624
      console.log('onErrorCaptured');
    });
    onRenderTriggered(() => {
      // 当组件更新时会首先触发此生命周期钩子 onRenderTriggered->onRenderTracked->onBeforeUpdate->onUpdated
      console.log('组件更新了');
    });
    return {
      a,
      setA,
    };
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
