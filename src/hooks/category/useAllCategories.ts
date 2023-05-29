import { useAlertObject } from "@/hooks/useAlertObject";
import { ref } from "vue";
import type { Category } from "@/types/Category";
import { supabase } from "@/plugin/supabase";

const { alertObject } = useAlertObject();

export const useAllCategories = () => {
  const categoryList = ref<Category[]>([]);
  const loading = ref(false);

  const fetchAllCategories = async () => {
    loading.value = true;

    const { data, error } = await supabase.from("categories").select();
    if (error) {
      alertObject(error);
      loading.value = false;
      return;
    }
    categoryList.value = data || [];

    loading.value = false;
  };

  return { categoryList, loading, fetchAllCategories };
};
