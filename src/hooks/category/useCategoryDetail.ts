import { useAlertObject } from "@/hooks/useAlertObject";
import { ref } from "vue";
import type { Category } from "@/types/Category";
import { supabase } from "@/plugin/supabase";

const { alertObject } = useAlertObject();

type Images = { images: { url: string }[] };

const refineImageResType = (imagesRes: { url: string } | { url: string }[] | null) => {
  if (imagesRes === null) {
    return [];
  } else if (Array.isArray(imagesRes)) {
    return imagesRes;
  } else {
    return [imagesRes];
  }
};

export const useCategoryDetail = () => {
  const category = ref<Category & Images>();
  const loading = ref(false);

  const fetchCategoryDetail = async (id: number) => {
    loading.value = true;

    // prettier-ignore
    const { data, error } = await supabase
      .from("categories")
      .select("*, images ( url )")
      .eq("id", id)
      .limit(1)
      .single();
    if (error) {
      alertObject(error);
      loading.value = false;
      return;
    }
    if (!data) {
      alert("No data found.");
      loading.value = false;
      return;
    }

    const images = refineImageResType(data.images);
    category.value = { ...data, images };

    loading.value = false;
  };

  return { category, loading, fetchCategoryDetail };
};
