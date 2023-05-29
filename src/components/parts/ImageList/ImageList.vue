<script setup lang="ts">
import ImageCard from "@/components/parts/ImageCard/ImageCard.vue";
import { computed } from "vue";

const props = defineProps<{ images: string[] }>();

const chunkSize = 3;
const chunkedImages = computed(() => {
  const chunks = [];
  for (let i = 0; i < props.images.length; i += chunkSize) {
    chunks.push(props.images.slice(i, i + chunkSize));
  }
  return chunks;
});
</script>

<template>
  <el-row
    v-for="(row, rowIndex) in chunkedImages"
    id="category-images"
    :key="`row-${rowIndex}`"
    class="row"
    :gutter="20"
  >
    <el-col v-for="image in row" :key="image" :span="8">
      <ImageCard :image="image" />
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>
