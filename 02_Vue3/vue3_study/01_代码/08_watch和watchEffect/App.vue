<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName"><br/>
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName"><br/>
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1"><br/>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2"><br/>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3"><br/>
  </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // 定义一个响应式对象
    const user = reactive({
      // 姓氏
      firstName: '东方',
      // 名字
      lastName: '不败'
    })

    // 通过计算属性的方式，实现第一个姓名的显示
    // vue3 中的计算属性
    // 如果计算属性的函数中如果只传入一个回调函数，表示的是 get

    // 第一个姓名
    // 返回的是一个 Ref 类型的对象
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName
    })
    // 第二个姓名
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName
      },
      set(val: string) {
        // console.log('=====', val)
        const names = val.split('_')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    // 第三个姓名
    const fullName3 = ref('')
    // 监视 --- 监视指定的数据
    watch(user, ({ firstName, lastName }) => {
      fullName3.value = firstName + '_' + lastName
    }, { immediate: true, deep: true })
    // immediate 默认会执行一次 watch，deep 深度监视

    // 监视，不需要配置 immediate，本身默认就是进行监视（默认执行一次）
    // watchEffect(() => {
    //   fullName3.value = user.firstName + '_' + user.lastName
    // })

    // 监视 fullName3 的数据，改变 firstName 和 lastName
    watchEffect(() => {
      const names = fullName3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    // watch --- 可以监视多个数据
    // watch([user.firstName, user.lastName, fullName3 ], () => {
    //   // fullName3 是响应式数据，但 user.firstName，user.lastName 不是响应式数据，所以当还没写 fullName3 时，代码不执行
    //   console.log('===')
    // })

    // 当使用 watch 监视非响应式的数据的时候，上述代码需修改
    watch([() => user.firstName, () => user.lastName], () => {
      console.log('===')
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    }
  }
})
</script>

<style scoped>

</style>
