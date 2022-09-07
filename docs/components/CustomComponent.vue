<template>
  <div>Access to Site & Page Data</div>
  <pre>{{ page }}</pre>
  <br />
  计数{{ count }}
  <button @click="count++">加一</button>
</template>
<script setup lang="ts">
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
} from 'vue'
import { useData } from 'vitepress'
const count = ref(1)
const { page } = useData()
</script>
