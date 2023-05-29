<script setup lang="ts">
defineProps<{ image: string }>();
</script>

<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-image fit="contain" class="image" :src="image" lazy />
  </el-card>
</template>

<style scoped>
.image {
  display: block;
}
</style>
