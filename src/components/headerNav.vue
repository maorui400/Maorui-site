<!--
 * @Descripttion: 全局头部组件
 * @Author: Maorui
 * @Date: 2020-11-11 10:42:14
 * @LastEditTime: 2020-11-11 15:21:16
-->
<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo__flipper">
        <div class="header__logo__flipper__front"></div>
        <div class="header__logo__flipper__back">彩蛋2</div>
      </div>
    </div>
    <div class="header__menu">2</div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
    setup() {
     console.info(
      "%c彩蛋%c1",
      'color: #ffffff; background: #000000; padding:5px 10px 5px 10px;font-size:40px;border-radius:12px 0 0 12px;', 'color: #000000; background: #FE9A00; padding:5px 10px;font-size:40px;border-radius:0 12px 12px 0;'
      )
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem;
  height: 3.75rem;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 89%, 0.5);
  box-sizing: border-box;
  &__logo {
    width: 120px;
    height: 60px;
    line-height: 320px;
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
        width: 120px;
        height: 60px;
        line-height: 60px;
        color: #FF9900;
        text-align: center;
        font-size: 20px;
        backface-visibility: hidden; /*div背对屏幕时不可见*/
        -webkit-backface-visibility: hidden; /* Chrome 和 Safari */
        -moz-backface-visibility: hidden; /* Firefox */
        cursor: pointer;
      }
      &__front {
        background: url('../../public/imgs/logo.png') center no-repeat;
        background-size: 120px;
      }
      &__back {
        transform: rotateY(180deg); /*反面内容初始化为背对着屏幕的*/
        -moz-transform: rotateY(180deg); /* Firefox */
        text-shadow: red 0 2px 0;
                  /* 动画名称 动画时长 延时时间 匀速 无限循环 逆播 */ 
        animation: easterEgg 0.2s 0.2s linear infinite alternate;
      }

    }
    &:hover &__flipper {
      transform: rotateY(180deg);
      -moz-transform: rotateY(180deg); /* Firefox */
    }
  }
}
@keyframes easterEgg {
			0% {
				text-shadow: red 2px 2px 0;
			}
			100% {
				text-shadow: red -2px -1px 0;
			}
		}
</style>
