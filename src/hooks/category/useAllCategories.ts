import { useAlertObject } from "@/hooks/useAlertObject";
import { ref } from "vue";
import type { Category } from "@/types/Category";
import { supabase } from "@/plugin/supabase";
import { useFormatDateStr } from "@/hooks/useFormatDateStr";

const { alertObject } = useAlertObject();
const { formatDateStr } = useFormatDateStr();

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

    // format date str for display.
    categoryList.value = categoryList.value.map((c) => {
      const created_at = formatDateStr(c.created_at);
      const updated_at = formatDateStr(c.updated_at);

      return {
        ...c,
        created_at,
        updated_at
      };
    });

    loading.value = false;
  };

  return { categoryList, loading, fetchAllCategories };
};
