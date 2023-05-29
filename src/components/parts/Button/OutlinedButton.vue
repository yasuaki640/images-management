<script setup lang="ts">
type Props = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  size?: "small" | "default" | "large";
};
withDefaults(defineProps<Props>(), {
  disabled: false,
  loading: false,
  size: "default"
});
</script>

<template>
  <el-button :disabled="disabled" :loading="loading" :size="size || 'default'">
    {{ label }}
  </el-button>
</template>
