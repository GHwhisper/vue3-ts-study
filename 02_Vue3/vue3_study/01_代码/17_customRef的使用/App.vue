<template>
  <h2>customRef 的使用</h2>
  <input type="text" v-model="keyword">
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent, ref } from 'vue'

// 自定义 hook 防抖的函数
// value 传入的数据，将来数据的类型不确定，所以用范型，delay 防抖的间隔时间，默认200毫秒
function useDebounceRef<T>(value: T, delay = 200) {
  // 准备一个存储定时器的 id 的变量
  let timeOutId: number
  return customRef((track, trigger) => {
    return {
      // 返回数据的
      get() {
        // 告诉 Vue 追踪数据
        track()
        return value
      },
      // 设置数据的
      set(newValue: T) {
        // 清理定时器
        clearTimeout(timeOutId)
        // 开启定时器
        timeOutId = setTimeout(() => {
          value = newValue
          // 告诉 Vue 更新界面
          trigger()
        }, delay)
      }
    }
  })
}

export default defineComponent({
  name: 'App',
  setup() {
    // const keyword = ref('abc')
    const keyword = useDebounceRef('abc', 500)

    return {
      keyword,
    }
  }
})
</script>

<style scoped>

</style>
