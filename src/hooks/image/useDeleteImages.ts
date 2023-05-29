import { computed, ref } from "vue";
import { supabase } from "@/plugin/supabase";
import { useAlertObject } from "@/hooks/useAlertObject";
import router from "@/router";

const { alertObject } = useAlertObject();

export const useDeleteImages = () => {
  const selectedImages = ref<string[]>([]);
  const loading = ref(false);

  const toggleSelectedImg = (url: string) => {
    const isAlreadySelected = selectedImages.value.some((selected) => selected === url);
    if (isAlreadySelected) {
      selectedImages.value = selectedImages.value.filter((selected) => selected !== url);
    } else {
      selectedImages.value.push(url);
    }
  };

  const isSelectedImage = (url: string): boolean => selectedImages.value.includes(url);

  const isAnyImageSelected = computed<boolean>(() => selectedImages.value.length > 0);

  const deleteImages = async () => {
    loading.value = true;

    // prettier-ignore
    const { error } = await supabase
      .from("images")
      .delete()
      .in("url", selectedImages.value);
    if (error) {
      alertObject(error);
      loading.value = false;
      return;
    }

    alert("Successfully deleted.");

    loading.value = false;
    router.go(0);
  };

  return {
    selectedImages,
    toggleSelectedImg,
    isSelectedImage,
    isAnyImageSelected,
    deleteImages,
    loading
  };
};
