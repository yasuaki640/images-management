<script setup lang="ts">
type Props = {
  modelValue: string;
  placeholder?: string;
  disabled?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  placeholder: "",
  disabled: false
});

const emits = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <el-input
    :model-value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    @input="emits('update:modelValue', $event)"
  />
</template>

<style></style>
