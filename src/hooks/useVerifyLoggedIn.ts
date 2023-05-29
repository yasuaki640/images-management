import { supabase } from "@/plugin/supabase";
import { ref } from "vue";

export const useVerifyLoggedIn = () => {
  const isLoggedIn = ref(false);

  const verifyLoggedIn = async () => {
    const res = await supabase.auth.getSession();
    isLoggedIn.value = !!res.data.session;
  };

  return { isLoggedIn, verifyLoggedIn };
};
