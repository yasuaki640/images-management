<script setup lang="ts">
import TextInput from "@/components/parts/TextInput/TextInput.vue";
import PrimaryButton from "@/components/parts/Button/PrimaryButton.vue";
import { reactive, ref, watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";

type Props = {
  name: string;
};
const props = defineProps<Props>();

const emits = defineEmits<{
  "update:name": [value: string];
  submit: [props: Props];
}>();

const formRef = ref<FormInstance>();
const rules = reactive<FormRules<Props>>({
  name: { required: true, message: "Please input name", trigger: "blur" }
});

const disabledSubmit = ref(true);
watch(
  () => props,
  async () => {
    await formRef.value?.validate((valid) => {
      disabledSubmit.value = !valid;
    });
  },
  { deep: true }
);

const handleSubmitClick = async () => {
  await formRef.value?.validate((valid) => {
    if (valid) emits("submit", props);
  });
};
</script>

<template>
  <el-form ref="formRef" :rules="rules" :model="props">
    <el-form-item label="Name" prop="name">
      <TextInput
        id="addName"
        :model-value="props.name"
        @update:model-value="emits('update:name', $event)"
      />
    </el-form-item>
    <el-form-item>
      <PrimaryButton label="submit" :disabled="disabledSubmit" @click="handleSubmitClick">
        Submit
      </PrimaryButton>
    </el-form-item>
  </el-form>
</template>
