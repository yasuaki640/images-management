<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/plugin/supabase";
import { useAlertObject } from "@/hooks/useAlertObject";
import { useResolveUrl } from "@/hooks/useResolveUrl";

const { alertObject } = useAlertObject();
const { resolveUrl } = useResolveUrl();

const emailInput = ref("");
const sending = ref(false);

const sendMagicLink = async (email: string) => {
  sending.value = true;

  try {
    const emailRedirectTo = resolveUrl("AdminCategoryList");
    const res = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo }
    });
    alertObject(res);
    emailInput.value = "";
  } catch (e) {
    alertObject(e as object);
  }

  sending.value = false;
};
</script>

<template>
  <section>
    <h2>Login</h2>
    <template v-if="sending">
      <p>Sending mail...</p>
    </template>
    <template v-else>
      <form>
        <label>
          email
          <input v-model="emailInput" type="text" />
        </label>
        <div id="send-magic-link">
          <button @click.prevent="sendMagicLink(emailInput)">Send magic link</button>
        </div>
      </form>
    </template>
  </section>
</template>
