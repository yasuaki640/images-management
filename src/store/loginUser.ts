import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/plugin/supabase";
import { useAlertObject } from "@/hooks/useAlertObject";
import router from "@/router";

const { alertObject } = useAlertObject();

const initLoginState = async () => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};

export const useLoginUserStore = defineStore("loginUser", () => {
  const isLoggedIn = ref(false);
  initLoginState().then((initState) => {
    isLoggedIn.value = initState;
  });

  const loading = ref(false);

  const verifyLoggedIn = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      alertObject(error);
      isLoggedIn.value = false;
      return;
    }
    isLoggedIn.value = !!data.session;
  };

  const signOut = async () => {
    loading.value = true;

    const { error } = await supabase.auth.signOut();
    if (error) {
      alertObject(error);
      loading.value = false;
      return;
    }
    alert("Successfully sign out.");

    isLoggedIn.value = false;
    loading.value = false;
    await router.push({ name: "CategoryTop" });
  };

  return {
    isLoggedIn,
    loading,
    verifyLoggedIn,
    signOut
  };
});
