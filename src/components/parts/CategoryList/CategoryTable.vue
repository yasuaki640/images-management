<script setup lang="ts">
import type { Category } from "@/types/Category";

type Props = { categories: Category[] };
defineProps<Props>();

const emits = defineEmits(["rowClick"]);
const onRowClicked = (clicked: Category) => {
  emits("rowClick", clicked);
};

const rowStyle = {
  cursor: "pointer"
};
</script>

<template>
  <el-table
    :data="categories"
    border
    style="width: 100%"
    :row-style="rowStyle"
    @row-click="onRowClicked"
  >
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="created_at" label="Created at" />
    <el-table-column prop="updated_at" label="Updated at" />
  </el-table>
</template>
