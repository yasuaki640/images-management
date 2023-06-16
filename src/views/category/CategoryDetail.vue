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
    <el-row>
      <el-col :span="8">
        <CategoryDescription :num-of-images="numOfImages || 0" :category="category" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <ImageList :images="category.images" />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.el-row {
  margin-bottom: 2vh;
}

.el-row:last-child {
  margin-bottom: 2vh;
}
</style>
