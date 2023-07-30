<script setup lang="ts">
import TextInput from "@/components/parts/TextInput/TextInput.vue";

type Props = {
  id: number;
  name: string;
};
const props = defineProps<Props>();

const emits = defineEmits<{
  (event: "update:name", value: string): void;
}>();
</script>

<template>
  <form>
    <input hidden :value="props.id" />
    <dl>
      <dt>
        <label for="addName">Name</label>
      </dt>
      <dd>
        <TextInput
          id="addName"
          :model-value="props.name"
          @update:model-value="emits('update:name', $event)"
        />
      </dd>
    </dl>
    <button type="submit">Edit</button>
  </form>
</template>
