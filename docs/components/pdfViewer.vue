<template>
  <div>
    <iframe :src="pdfUrl" :style="style" frameborder="0"></iframe>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  pdfUrl: {
    type: String,
    default: '../test.pdf',
  },
  style: {
    type: Object,
    default: {
      width: '100%',
      height: '500px',
    },
  },
})
</script>
<style scoped lang="scss"></style>
