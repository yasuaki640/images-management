<script setup lang="ts">
import TextInput from "@/components/parts/TextInput/TextInput.vue";
import PrimaryButton from "@/components/parts/Button/PrimaryButton.vue";
import { reactive, ref, watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";

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

const formRef = ref<FormInstance>();
const rules = reactive<FormRules<Props>>({
  email: {
    required: true,
    message: "Please input correct mail address",
    trigger: "blur",
    type: "email"
  }
});

const disabledSend = ref(true);
watch(
  () => props,
  async () => {
    await formRef.value?.validate((valid) => {
      disabledSend.value = !valid;
    });
  },
  { deep: true }
);
</script>

<template>
  <el-form ref="formRef" v-loading="sending" :rules="rules" :model="props">
    <el-form-item label="Mail" prop="email">
      <TextInput :model-value="props.email" @update:model-value="emits('update:email', $event)" />
    </el-form-item>
    <el-form-item>
      <PrimaryButton
        label="Send Magic Link"
        :disabled="disabledSend"
        @click="emits('sendMagicLink', props.email)"
      />
    </el-form-item>
  </el-form>
</template>
