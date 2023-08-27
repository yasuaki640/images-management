<script setup lang="ts">
import TextInput from "@/components/parts/TextInput/TextInput.vue";
import PrimaryButton from "@/components/parts/Button/PrimaryButton.vue";

type Props = {
  email: string;
  sending: boolean;
};
const props = defineProps<Props>();

const emits = defineEmits<{
  "update:email": [newVal: string];
  "update:sending": [newVal: boolean];
  sendMagicLink: [email: string];
}>();
</script>

<template>
  <el-form v-loading="sending">
    <el-form-item label="Mail">
      <TextInput :model-value="props.email" @update:model-value="emits('update:email', $event)" />
    </el-form-item>
    <el-form-item>
      <PrimaryButton label="Send Magic Link" @click="emits('sendMagicLink', props.email)" />
    </el-form-item>
  </el-form>
</template>
