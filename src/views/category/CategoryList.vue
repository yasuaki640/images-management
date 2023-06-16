<script setup lang="ts">
import { onBeforeMount } from "vue";
import router from "@/router";
import { useAllCategories } from "@/hooks/category/useAllCategories";
import CategoryTable from "@/components/parts/CategoryList/CategoryTable.vue";
import type { Category } from "@/types/Category";

const { categoryList, loading, fetchAllCategories } = useAllCategories();

const handleRowClick = (c: Category): void => {
  router.push({ name: "CategoryDetail", params: { id: c.id } });
};

onBeforeMount(async () => {
  await fetchAllCategories();
});
</script>

<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <div v-if="loading">
        <p class="loading">Loading...</p>
      </div>
      <div v-else>
        <CategoryTable :categories="categoryList" @row-click="handleRowClick" />
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.loading {
  text-align: center;
}
</style>
