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
  <header>
    <h1>My Images App</h1>
    <OutlinedButton
      v-if="loginUserStore.isLoggedIn"
      label="Sign out"
      :disabled="loginUserStore.loading"
      @click="loginUserStore.signOut"
    />
  </header>
  <el-container>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}
</style>
