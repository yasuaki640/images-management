<script setup lang="ts">
import type { Category } from "@/types/Category";

type Props = {
  category: Category;
  numOfImages: number;
};
defineProps<Props>();
</script>

<template>
  <el-descriptions title="Category Info" :column="1" border>
    <el-descriptions-item label="ID">{{ category.id }}</el-descriptions-item>
    <el-descriptions-item label="Category Name">{{ category.name }}</el-descriptions-item>
    <el-descriptions-item label="Number of Images">{{ numOfImages }}</el-descriptions-item>
  </el-descriptions>
</template>

<style scoped>
:deep(.el-descriptions__cell.el-descriptions__label.is-bordered-label) {
  width: 15vw;
}
</style>
