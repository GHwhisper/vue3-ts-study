<template>
  <h2>Child 子级组件</h2>
  <h3>age: {{ age }}</h3>
  <h3>length: {{ length }}</h3>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, toRef } from 'vue'

function useGetLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length
  })
}

export default defineComponent({
  name: 'Child',
  props: {
    age: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const length = useGetLength(toRef(props, 'age'))

    return  {
      length
    }
  }
})
</script>

<style scoped>

</style>
