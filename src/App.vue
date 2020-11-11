<!--
 * @Descripttion: 首页
 * @Author: Maorui
 * @Date: 2020-10-29 14:17:38
 * @LastEditTime: 2020-11-11 10:48:17
-->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">生命周期演示</router-link> |
      <router-link to="/about">reactive toRefs演示</router-link> |
      <router-link to="/test">ref computed watch getCurrentInstance演示</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
body, html {
  margin: 0;
  height: 100%;
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
