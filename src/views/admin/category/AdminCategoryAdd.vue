<script setup lang="ts">
import router from "@/router";
import { useCreateCategory } from "@/hooks/category/useCreateCategory";
import CategoryForm from "@/components/parts/CategoryForm/CategoryForm.vue";
import { useShowMessage } from "@/hooks/useShowMessage";

const { categoryInput, createCategory } = useCreateCategory();

const { showMessage } = useShowMessage();

const register = async (): Promise<void> => {
  const categoryId = await createCategory();
  if (!categoryId) {
    return;
  }
  showMessage("Successfully Registered Category", "success");
  await router.push({ name: "AdminCategoryList" });
};
</script>

<template>
  <h2>Register Category</h2>
  <CategoryForm v-model:name="categoryInput.name" @submit="register" />
</template>
