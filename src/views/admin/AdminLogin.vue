<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/plugin/supabase";
import { useResolveUrl } from "@/hooks/useResolveUrl";
import LoginForm from "@/components/parts/LoginForm/LoginForm.vue";
import { useShowMessage } from "@/hooks/useShowMessage";

const { resolveUrl } = useResolveUrl();

const emailInput = ref("");
const sending = ref(false);

const { showMessage } = useShowMessage();
const sendMagicLink = async (email: string) => {
  sending.value = true;

  try {
    const emailRedirectTo = resolveUrl("AdminCategoryList");
    const res = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo }
    });
    if (res.error) throw new Error(res.error.message);

    showMessage("Successfully sent login mail.", "success");
  } catch (e) {
    showMessage("An unexpected error occurred.", "error");
  } finally {
    emailInput.value = "";
  }

  sending.value = false;
};
</script>

<template>
  <section>
    <h2>Login</h2>
    <LoginForm
      v-model:email="emailInput"
      v-model:sending="sending"
      @send-magic-link="sendMagicLink"
    />
  </section>
</template>
