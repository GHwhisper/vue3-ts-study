<template>
  <h2>Child 子级组件</h2>
  <h3>msg: {{ msg }}</h3>
<!--  <h3>count: {{ count }}</h3>-->
  <button @click="emitXxx">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Child',
  props: ['msg'],
  // setup 细节问题
  // setup 是在 beforeCreate 生命周期回调之前就执行了，而且只执行一次
  // 由此可以推断出：setup 在执行的时候，当前的组件还没有创建出来，也就意味着：组件实例对象 this 根本就不能用
  // this 是 undefined，说明就不能通过 this 去调用 data/computed/methods/props 中的相关内容了
  // 其实所有的composition API相关回调函数中也都不可以

  // setup 中的返回值是一个对象，内部的属性和方法是给 html 模版使用的
  // setup 中的对象内部的属性和 data 函数中的 return 对象的属性都可以在 html 模版中使用
  // setup 中的对象的属性和 data 函数中的对象中的属性会合并为组件对象的属性
  // setup 中的对象中的方法和 methods 对象中的方法会合并为组件对象的方法
  // 如果有重名，setup优先，
  // 在 vue3 中尽量不要混合使用 data和setup 及 methods和setup
  // 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods，因为需要通过this访问，而setup中this为undefined
  // setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据

  // 数据初始化的生命周期回调
  // beforeCreate() {
  //   console.log('beforeCreate')
  // },
  // // 界面渲染完毕
  // mounted() {
  //   console.log('mounted', this)
  // },

  // setup(props, context) {
  setup(props, { attrs, slots, emit }) {
    // props 参数，是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用 props 接收到的所有属性
    // props: 包含props配置声明且传入了的所有属性的对象
    // console.log(props.msg)

    // attrs 参数，是一个对象，里面有 attrs对象（获取当前组件标签上的所有属性对象，但是该属性是在props中没有声明接受的所有对象），emit方法（分发事件的），slots对象（插槽）
    // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    // console.log(context.attrs)
    // console.log(context.emit)
    // console.log(context.attrs.msg2)
    // console.log('=====')
    console.log('setup 执行了', this)

    const showMsg1 = () => {
      console.log('setup 中的 showMsg1 方法')
    }
    // 按钮的点击事件的回调函数
    function emitXxx() {
      // context.emit('xxx', '++')
      emit('xxx', '++')
    }

    return {
      // setup 中一般都是返回一个对象，对象中的属性和方法都可以在 html 模版中直接使用
      showMsg1,
      emitXxx,
    }
  },
  // data() {
  //   return {
  //     count: 10,
  //   }
  // },
  // methods: {
  //   showMsg2() {
  //     console.log('methods 中的 showMsg2 方法')
  //   }
  // }
})
</script>

<style scoped>

</style>
