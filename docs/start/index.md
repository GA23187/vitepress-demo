---
prev: '自定义上下页链接'
tags: [1, 2]
date: 2022-01-09
author: tiger
---

# 测试 vue 组件

<script setup>
import CustomComponent from '@/components/CustomComponent.vue'
import { ElButton } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
</script>

This is a .md using a custom component

<CustomComponent />

<el-button type="primary">Primary</el-button>
<el-button type="success">Success</el-button>
<el-button type="danger" :icon="Delete" circle />
