<template>
  <!-- Vue2 中的 html 模版中必须要有一对根标签，Vue3 组件的 html 模版中可以没有根标签 -->
  <img alt="Vue logo" src="assets/logo.png">
  <!-- 使用子级组件 -->
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
// 这里可以使用 ts 代码

// defineComponent 函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';
// 引入一个子级组件
import HelloWorld from './components/HelloWorld.vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是 App
  name: 'App',
  // 注册一个子级组件
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
