<script lang="ts" setup>
import { Picture } from "@element-plus/icons-vue";
import OutlinedButton from "@/components/parts/Button/OutlinedButton.vue";

type Props = {
  isLoggedIn: boolean;
  loading: boolean;
};
defineProps<Props>();

const emits = defineEmits(["backClick", "logoutClick"]);

const onBackClicked = () => {
  emits("backClick");
};
const onLogoutClicked = () => {
  emits("logoutClick");
};
</script>

<template>
  <el-page-header title="Images Management App" :icon="Picture" @back="onBackClicked">
    <template v-if="isLoggedIn" #extra>
      <OutlinedButton
        id="logout-button"
        label="Logout"
        :loading="loading"
        @click="onLogoutClicked"
      />
    </template>
  </el-page-header>
</template>

<style scoped>
.el-page-header {
  background-color: var(--el-color-info-light-7);
  padding: 10px 5px;
  border-radius: var(--el-border-radius-base);
}
#logout-button {
  margin-right: 8px;
}
</style>
