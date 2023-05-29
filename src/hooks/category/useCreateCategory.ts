import { useAlertObject } from "@/hooks/useAlertObject";
import { reactive, ref } from "vue";
import { supabase } from "@/plugin/supabase";

const { alertObject } = useAlertObject();

type CategoryInput = { name: string };

export const useCreateCategory = () => {
  const categoryInput = reactive<CategoryInput>({
    name: ""
  });
  const loading = ref(false);

  const createCategory = async (): Promise<number | undefined> => {
    loading.value = true;

    // prettier-ignore
    const { data, error } = await supabase
      .from("categories")
      .insert(categoryInput)
      .select("id");
    if (error) {
      alertObject(error);
    }

    const id = data?.pop()?.id;
    if (!id) {
      alert("No category id was created.");
    }

    loading.value = true;
    return id;
  };

  return { categoryInput, createCategory, loading };
};
