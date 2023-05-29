<script setup lang="ts">
import { useEditCategory } from "@/hooks/category/useEditCategory";

type Props = {
  id: number;
};
const props = defineProps<Props>();

const { categoryInput, confirmEdit, loading, confirming } = useEditCategory(props.id);
</script>

<template>
  <h2>Edit Category Profile.</h2>
  <section v-if="loading || !categoryInput">Loading...</section>
  <section v-else>
    <form @submit.prevent="confirmEdit">
      <dl>
        <dt>
          <label for="addName">Name</label>
        </dt>
        <dd>
          <input id="addName" v-model="categoryInput.name" type="text" required />
        </dd>
      </dl>
      <button :disabled="confirming" type="submit">Edit</button>
    </form>
  </section>
</template>
