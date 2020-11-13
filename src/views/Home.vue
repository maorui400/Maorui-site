<!--
 * @Descripttion: vue3 demo
 * @Author: Maorui
 * @Date: 2020-10-29 14:17:38
 * @LastEditTime: 2020-11-13 15:53:05
-->
<template>
  <div class="page">
    <headerNav></headerNav>
    <div class="page--swiper">
        <van-swipe class="page--swiper--wrapper" vertical>
          <van-swipe-item>
            1
          </van-swipe-item>
          <van-swipe-item>
            2
          </van-swipe-item>
          <van-swipe-item>
            3
          </van-swipe-item>
          <van-swipe-item>
            4
          </van-swipe-item>
        </van-swipe>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import headerNav from '@/components/headerNav.vue';
import { addRef, toRefs, reactive, ref, onMounted } from 'vue';

export default {
  name: 'Home',
  setup() {
    const testRef = ref(null);
    onMounted(() => {
        console.log("子组件实例", testRef.value)
        console.log("父组件mounted")
    })
    console.log('testRef', testRef);
    const state = reactive({
    });
     return {
        // 将代理对象转换为纯对象。并对其每个key做包装，包装为ref
        ...toRefs(state),
        addRef,
        testRef
      }
  },
  components: {
    headerNav,
  },
};
</script>

<style lang="scss" scoped>
.page{
  position: relative;
  width: 100%;
  height: 100%;
  &--swiper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    &--wrapper{
      width: 100%;
      height: 100%;
      .van-swipe-item {
        color: #fff;
        text-align: center;
        background-color: #000;
      }
    }
  }
}
</style>