<script setup lang="ts">
import { RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { useLoginUserStore } from "@/store/loginUser";
import OutlinedButton from "@/components/parts/Button/OutlinedButton.vue";

const loginUserStore = useLoginUserStore();

onBeforeMount(async () => {
  await loginUserStore.verifyLoggedIn();
});
</script>

<template>
  <el-container>
    <el-header>
      <h1>My Images App</h1>
      <OutlinedButton
        v-if="loginUserStore.isLoggedIn"
        label="Sign out"
        :disabled="loginUserStore.loading"
        @click="loginUserStore.signOut"
      />
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>
