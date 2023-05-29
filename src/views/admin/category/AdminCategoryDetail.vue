<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useCategoryDetail } from "@/hooks/category/useCategoryDetail";
import { useDeleteImages } from "@/hooks/image/useDeleteImages";
import { useDeleteCategoryAndImages } from "@/hooks/category/useDeleteCategoryAndImages";

const { category, fetchCategoryDetail, loading } = useCategoryDetail();
const { toggleSelectedImg, isSelectedImage, isAnyImageSelected, deleteImages } = useDeleteImages();
const { deleteCategoryAndImages, loading: categoryDeleting } = useDeleteCategoryAndImages();

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
    <div id="links">
      <RouterLink :to="{ name: 'AdminCategoryList' }">Back to category list</RouterLink>
    </div>
    <div id="dataManipulationButtons">
      <RouterLink :to="{ name: 'AdminCategoryEdit', params: { id } }">
        <button>Edit Profile.</button>
      </RouterLink>
      <RouterLink :to="{ name: 'AdminCategoryImageAdd', params: { id } }">
        <button>Add Category Images.</button>
      </RouterLink>
      <button :disabled="categoryDeleting" @click="deleteCategoryAndImages(id)">
        Delete Category.
      </button>
      <button :disabled="!isAnyImageSelected" @click="deleteImages">Delete Selected Images.</button>
    </div>
    <dl>
      <dt>ID</dt>
      <dd>{{ category.id }}</dd>
      <dt>Name</dt>
      <dd>{{ category.name }}</dd>
      <div
        v-for="image in category.images"
        id="categoryImages"
        :key="image.url"
        :class="{ selectedImg: isSelectedImage(image.url) }"
      >
        <img
          width="600"
          :src="image.url"
          alt="category image"
          @click="toggleSelectedImg(image.url)"
        />
      </div>
    </dl>
  </section>
</template>

<style scoped>
.selectedImg {
  border: 5px solid blue;
}

.categoryImages img {
  width: 100%;
  height: auto;
}
</style>
