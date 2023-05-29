import { ref } from "vue";
import type { Category } from "@/types/Category";
import { supabase } from "@/plugin/supabase";
import { useAlertObject } from "@/hooks/useAlertObject";
import router from "@/router";

const { alertObject } = useAlertObject();

const fetchCategory = (id: number) => {
  // prettier-ignore
  return supabase
    .from("categories")
    .select()
    .eq("id", id)
    .limit(1)
    .single();
};

export const useEditCategory = (id: number) => {
  const categoryInput = ref<Category>();
  fetchCategory(id).then((res) => {
    categoryInput.value = res.data || undefined;
  });

  const loading = ref(false);
  const confirming = ref(false);

  const confirmEdit = async () => {
    confirming.value = true;

    if (!categoryInput.value) {
      alert("No Category Profile inputted");
      return;
    }

    const id = categoryInput.value?.id;
    // prettier-ignore
    const { error } = await supabase
      .from("categories")
      .update(categoryInput.value)
      .eq("id", id);
    if (error) {
      alertObject(error);
    }
    alert("Successfully edited.");

    confirming.value = false;

    await router.push({ name: "AdminCategoryDetail", params: { id } });
  };

  return { categoryInput, confirmEdit, loading, confirming };
};
