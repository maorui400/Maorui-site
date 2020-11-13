<!--
 * @Descripttion: 底部组件
 * @Author: Maorui
 * @Date: 2020-11-13 10:18:47
 * @LastEditTime: 2020-11-13 16:54:33
-->
<template>
  <div class="footer">
    <a target="_black" href="http://beian.miit.gov.cn">备案号：{{state.BANum}}</a> 
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: "footerNav",
    setup() {
      const state = reactive({
          BANum: '皖ICP备2020018845号-1'
      })
      return { state }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    font-size: 0.875rem;
    height: 2.5rem;
    line-height: 2.5rem;
    background: rgba(255,255,255,.8);
    text-align: center;
    z-index: 9;
    &>a:visited,
    &>a,
    &>a:active{
      color: #04040480;
    }
  }
</style>
