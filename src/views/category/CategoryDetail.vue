<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useCategoryDetail } from "@/hooks/category/useCategoryDetail";
import ImageList from "@/components/parts/ImageList/ImageList.vue";
import CategoryDescription from "@/components/parts/CategoryDescription/CategoryDescription.vue";

const { category, fetchCategoryDetail, loading } = useCategoryDetail();

type Props = {
  id: number;
};
const props = defineProps<Props>();

const numOfImages = computed(() => category.value?.images.length);

onBeforeMount(async () => {
  await fetchCategoryDetail(props.id);
});
</script>

<template>
  <section v-if="loading || !category">Loading...</section>
  <section v-else>
    <CategoryDescription :num-of-images="numOfImages || 0" :category="category" />
    <ImageList :images="category.images" />
  </section>
</template>
