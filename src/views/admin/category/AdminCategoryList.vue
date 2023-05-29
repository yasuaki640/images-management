<script setup lang="ts">
import { onBeforeMount } from "vue";
import router from "@/router";
import { useAllCategories } from "@/hooks/category/useAllCategories";
import CategoryTable from "@/components/parts/CategoryList/CategoryTable.vue";
import type { Category } from "@/types/Category";
import PrimaryButton from "@/components/parts/Button/WarningButton.vue";

const { categoryList, loading, fetchAllCategories } = useAllCategories();

const handleRowClick = (c: Category): void => {
  router.push({ name: "AdminCategoryDetail", params: { id: c.id } });
};

onBeforeMount(async () => {
  await fetchAllCategories();
});
</script>

<template>
  <section>
    <h2>Category List</h2>
    <PrimaryButton label="Register Category" @click="router.push({ name: 'AdminCategoryAdd' })" />
  </section>
  <section v-if="loading">Loading...</section>
  <section v-else>
    <CategoryTable :categories="categoryList" @row-click="handleRowClick" />
  </section>
</template>
