<!--
 * @Descripttion: 全局头部组件
 * @Author: Maorui
 * @Date: 2020-11-11 10:42:14
 * @LastEditTime: 2020-11-13 15:45:18
-->
<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo__flipper">
        <div class="header__logo__flipper__front"></div>
        <div class="header__logo__flipper__back">彩蛋2</div>
      </div>
    </div>
    <div class="header__menu">
      <div class="header__menu__item" v-for="(item, itemIndex) in data.menuData" 
           :key="itemIndex">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import {
  reactive
} from 'vue';
export default {
  name: "headerNav",
  setup() {
    let data = reactive({
      menuData: ['菜单1', '菜单2', '菜单3'],
    });
    console.info(
    "%c彩蛋%c1",
    'color: #ffffff; background: #000000; padding:5px 10px 5px 10px;font-size:40px;border-radius:12px 0 0 12px;', 'color: #000000; background: #FE9A00; padding:5px 10px;font-size:40px;border-radius:0 12px 12px 0;'
    )
    console.log('data', data);
    return {data};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: sticky;
  display: flex;
  top: 0px;
  width: 100%;
  padding: 0 1.25rem;
  height: 3.75rem;
  line-height: 3.75rem;
  background: rgba(255,255,255, .9);
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 89%, 0.5);
  flex-wrap: nowrap;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 9;
  &__logo {
    width: 7.5rem;
    height: 3.75rem;
    color: #ffffff;
    text-align: center;
    transition: 0.6s; /*双面div翻转效果的时间*/
    transform-style: preserve-3d; /*双面div的子元素可保持其3D位置*/
    -moz-transform-style: preserve-3d;
    position: relative;
    &__flipper {
      transition: 0.6s;
      transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      position: relative;
      &__front,
      &__back {
        position: absolute;
        top: 0;
        left: 0;
        width: 7.5rem;
        height: 3.75rem;
        line-height: 3.75rem;
        color: #FF9900;
        text-align: center;
        font-size: 1.25rem;
        backface-visibility: hidden; /*div背对屏幕时不可见*/
        -webkit-backface-visibility: hidden; /* Chrome 和 Safari */
        -moz-backface-visibility: hidden; /* Firefox */
        cursor: pointer;
      }
      &__front {
        background: url('../../public/imgs/logo.png') center no-repeat;
        background-size: 7.5rem;
      }
      &__back {
        transform: rotateY(180deg); /*反面内容初始化为背对着屏幕的*/
        -moz-transform: rotateY(180deg); /* Firefox */
        text-shadow: red 0 .125rem 0;
                  /* 动画名称 动画时长 延时时间 匀速 无限循环 逆播 */ 
        animation: easterEgg .2s .2s linear infinite alternate;
      }

    }
    &:hover &__flipper {
      transform: rotateY(180deg);
      -moz-transform: rotateY(180deg); /* Firefox */
    }
  }
  &__menu {
    display: flex;
    justify-content: flex-start;
    &__item{
      position: relative;
      width: 5rem;
      height: 100%;
      margin-left: 0.625rem;
      box-sizing: border-box;
      overflow: hidden;
      cursor: pointer;
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        background: #ff9900;
        height: 0.125rem;
        bottom: 0;
        right: 100%;
        transition: right 0.2s ease-in-out;
      }
      &:hover{
        &::after{
          right: 0;
        }
      }
    }
  }
}
@keyframes easterEgg {
			0% {
				text-shadow: red 0.125rem 0.125rem 0;
			}
			100% {
				text-shadow: red -0.125rem -0.0625rem 0;
			}
		}
</style>
