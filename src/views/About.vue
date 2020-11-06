<!--
 * @Descripttion: Vue3 demo
 * @Author: Maorui
 * @Date: 2020-10-29 14:17:38
 * @LastEditTime: 2020-11-03 09:42:59
-->
<template>
  <div class="about">
    <div class="mine" ref="elmRefs">
      <h1>This is an about page</h1>
      <div>二哈：{{obj.name}}{{age}} ----toRefs 二哈：{{name}}{{age}}</div>
      <button @click="changeJackAge">Change Jack Age</button>
      <div v-for="(item,index) in list"
           :key="item.age+index">
           {{item.name}}今年{{item.age}}岁
      </div>
    </div>
  </div>
</template>
<script>

import
{
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
  toRefs,
  reactive,
} from 'vue';

// @ is an alias to /src
export default defineComponent({
  setup() {
    // 获取真实dom
    const elmRefs = ref(null);
    const { ctx } = getCurrentInstance();
    const dataList = [
      {
        name: 'lisa',
        age: 19,
      },
      {
        name: '张三',
        age: 21,
      },
      {
        name: 'jack',
        age: 23,
      },
    ];
    const objData = {
      name: 'erha',
      age: '1',
      skill: '拆家',
    };
    const list = reactive(dataList); // 定义响应式数据list
    const obj = reactive(objData);
    const { name, age } = toRefs(obj);
    const alertMsg = () => {
      console.log(1);
    };
    const changeJackAge = () => {
      // console.log(list)
      list[2].age += 1;
      alertMsg();
    };

    const toRefsChangeAge = () => {
      // console.log(age)
      age.value = 1000;
    };

    console.log('ctx', ctx, this);
    onMounted(() => {
      console.log(elmRefs.value); // 得到一个 RefImpl 的对象, 通过 .value 访问到数据
    });
    return {
      elmRefs,
      list,
      changeJackAge,
      obj,
      name,
      age,
      alertMsg,
      toRefsChangeAge,
    };
  },
  countAdd() {
    console.log('1', 1);
  },
});
</script>
