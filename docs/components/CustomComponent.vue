<template>
  <div>自定义vue组件(非全局注册)</div>
  <pre>{{ page }}</pre>
  <br />
  计数{{ count }}
  <button @click="count++">加一</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
const count = ref(1)
const { page } = useData()
</script>
