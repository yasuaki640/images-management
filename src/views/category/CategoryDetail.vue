<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useCategoryDetail } from "@/hooks/category/useCategoryDetail";
import ImageList from "@/components/parts/ImageList/ImageList.vue";

const { category, fetchCategoryDetail, loading } = useCategoryDetail();

type Props = {
  id: number;
};
const props = defineProps<Props>();

onBeforeMount(async () => {
  await fetchCategoryDetail(props.id);
});
</script>

<template>
  <section v-if="loading || !category">Loading...</section>
  <section v-else>
    <h2>Category Detail</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{ category.id }}</dd>
      <dt>Name</dt>
      <dd>{{ category.name }}</dd>
      <ImageList :images="category.images" />
    </dl>
  </section>
</template>
