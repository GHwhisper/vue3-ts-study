<template>
  <h2>shallowReactive 和 shallowRef</h2>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>
  <hr>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef, } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // 深度劫持（深监视）--- 深度响应式
    const m1 = reactive({
      name: '鸣人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    // 浅劫持（浅监视）--- 浅响应式
    const m2 = shallowReactive({
      name: '鸣人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    // 深度劫持（深监视）--- 深度响应式 --- 做了 reactive 的处理
    const m3 = ref({
      name: '鸣人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    // 浅劫持（浅监视）--- 浅响应式
    const m4 = shallowRef({
      name: '鸣人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    const update = () => {
      // 更改m1的数据 --- reactive
      // m1.name += '=='
      // m1.car.name += '=='

      // 更改m2的数据 --- shallowReactive
      // m2.name += '=='
      // m2.car.name += '==' // 测试该行时，需把 m2.name += '==' 注释掉，否则 m2.car.name 依然会改变

      // 更改m3的数据 --- ref
      // m3.value.name += '=='
      // m3.value.car.name += '=='

      // 更改m4的数据 --- shallowRef
      // m4.value.name += '=='
      // m4.value.car.name += '=='
    }

    return {
      m1,
      m2,
      m3,
      m4,
      update,
    }
  }
})
</script>

<style scoped>

</style>
