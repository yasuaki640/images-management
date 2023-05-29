<script setup lang="ts">
import router from "@/router";
import { useCreateCategory } from "@/hooks/category/useCreateCategory";
import { useCreateImages } from "@/hooks/image/useCreateImages";

const { categoryInput, createCategory } = useCreateCategory();
const { tempAddedImages, createImages, imageInput, onAppendImage } = useCreateImages();

const register = async (): Promise<void> => {
  const categoryId = await createCategory();
  if (!categoryId) {
    return;
  }
  await createImages(categoryId);

  alert("Successfully created.");

  await router.push({ name: "AdminCategoryList" });
};
</script>

<template>
  <h2>Register Category</h2>
  <form @submit.prevent="register">
    <dl>
      <dt>
        <label for="addName">Name</label>
      </dt>
      <dd>
        <input id="addName" v-model="categoryInput.name" type="text" required />
      </dd>
    </dl>
    <div id="addImage">
      <dl>
        <dt>
          <label for="addImage">Images</label>
        </dt>
        <dd>
          <div id="appendedImages">
            <img
              v-for="(image, idx) in tempAddedImages"
              :key="idx"
              :src="image"
              :alt="image"
              width="150"
            />
          </div>
          <input id="addImage" v-model="imageInput" type="text" />
        </dd>
      </dl>
      <button @click.prevent="onAppendImage(imageInput)">add image</button>
    </div>
    <button type="submit">Register</button>
  </form>
</template>
