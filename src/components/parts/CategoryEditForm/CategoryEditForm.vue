<script setup lang="ts">
import TextInput from "@/components/parts/TextInput/TextInput.vue";
import PrimaryButton from "@/components/parts/Button/PrimaryButton.vue";

type Props = {
  id: number;
  name: string;
};
const props = defineProps<Props>();

const emits = defineEmits<{
  "update:name": [value: string];
  submit: [props: Props];
}>();
</script>

<template>
  <el-form>
    <el-form-item label="Name">
      <TextInput
        id="addName"
        :model-value="props.name"
        @update:model-value="emits('update:name', $event)"
      />
    </el-form-item>
    <el-form-item>
      <PrimaryButton label="submit" @click="emits('submit', props)">Submit</PrimaryButton>
    </el-form-item>
  </el-form>
</template>
