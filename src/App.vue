<script setup lang="ts">
import { RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { useLoginUserStore } from "@/store/loginUser";
import TheHeader from "@/components/parts/TheHeader/TheHeader.vue";
import router from "@/router";

const loginUserStore = useLoginUserStore();

onBeforeMount(async () => {
  await loginUserStore.verifyLoggedIn();
});
</script>

<template>
  <el-container>
    <el-header>
      <TheHeader
        :is-logged-in="loginUserStore.isLoggedIn"
        :loading="loginUserStore.loading"
        @back-click="router.push({ name: 'CategoryTop' })"
        @logout-click="loginUserStore.signOut"
      />
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>
