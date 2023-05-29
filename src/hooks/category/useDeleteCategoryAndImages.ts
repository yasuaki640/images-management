import { supabase } from "@/plugin/supabase";
import { useAlertObject } from "@/hooks/useAlertObject";
import { ref } from "vue";
import router from "@/router";

const { alertObject } = useAlertObject();

export const useDeleteCategoryAndImages = () => {
  const loading = ref(false);

  const deleteCategoryAndImages = async (id: number) => {
    loading.value = true;

    const ok = confirm("Delete Category and Related Images. OK?");
    if (!ok) {
      loading.value = false;
      return;
    }

    // prettier-ignore
    const { error } = await supabase
      .from("images")
      .delete()
      .eq("category_id", id);
    if (error) {
      alertObject(error);
      loading.value = false;
      return;
    }

    // prettier-ignore
    const { error: deleteCategoryError } = await supabase
      .from("categories")
      .delete()
      .eq("id", id);
    if (deleteCategoryError) {
      alertObject(deleteCategoryError);
      loading.value = false;
      return;
    }

    alert("Successfully deleted category and related images.");

    loading.value = false;

    await router.push({ name: "AdminCategoryList" });
  };

  return { deleteCategoryAndImages, loading };
};
