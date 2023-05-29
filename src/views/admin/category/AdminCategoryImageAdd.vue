<script setup lang="ts">
import router from "@/router";
import { useCreateImages } from "@/hooks/image/useCreateImages";
import { useFetchImages } from "@/hooks/image/useFetchImages";
import { onBeforeMount } from "vue";

const { fetchedImages, fetchImages, loading } = useFetchImages();
const {
  tempAddedImages,
  createImages,
  imageInput,
  onAppendImage,
  loading: imagesCreating
} = useCreateImages();

type Props = {
  id: number;
};
const props = defineProps<Props>();

const register = async (): Promise<void> => {
  const id = props.id;
  await createImages(id);

  alert("Successfully images added.");

  await router.push({ name: "AdminCategoryDetail", params: { id } });
};

onBeforeMount(async () => {
  await fetchImages(props.id);
});
</script>

<template>
  <h2>Add Category Images</h2>
  <section v-if="loading">Loading...</section>
  <section v-else>
    <form @submit.prevent="register">
      <div id="addImage">
        <dl>
          <dt>
            <label for="addImage">Existing Images</label>
          </dt>
          <dd>
            <div id="fetchedImages">
              <img
                v-for="(image, idx) in fetchedImages"
                :key="idx"
                :src="image"
                :alt="image"
                width="100"
              />
            </div>
          </dd>
          <dt>
            <label for="addImage">Additional Images</label>
          </dt>
          <dd>
            <div id="appendedImages">
              <img
                v-for="(image, idx) in tempAddedImages"
                :key="idx"
                :src="image"
                :alt="image"
                width="300"
              />
            </div>
            <input id="addImage" v-model="imageInput" type="text" />
          </dd>
        </dl>
        <button @click.prevent="onAppendImage(imageInput)">add image</button>
      </div>
      <button :disabled="imagesCreating">Confirm</button>
    </form>
  </section>
</template>
