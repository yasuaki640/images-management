import { ref } from "vue";
import { supabase } from "@/plugin/supabase";
import { useAlertObject } from "@/hooks/useAlertObject";

const { alertObject } = useAlertObject();

export const useFetchImages = () => {
  const fetchedImages = ref<string[]>([]);
  const loading = ref(false);

  const fetchImages = async (categoryId: number) => {
    loading.value = true;

    // prettier-ignore
    const { data, error } = await supabase
      .from("images")
      .select("url")
      .eq("category_id", categoryId);
    if (error) {
      alertObject(error);
    }
    fetchedImages.value = data?.map((i) => i.url) || [];

    loading.value = false;
  };

  return {
    fetchedImages,
    fetchImages,
    loading
  };
};
