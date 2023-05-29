import { ref } from "vue";
import { supabase } from "@/plugin/supabase";
import { useAlertObject } from "@/hooks/useAlertObject";

const { alertObject } = useAlertObject();

export const useCreateImages = () => {
  const tempAddedImages = ref<string[]>([]);
  const imageInput = ref("");
  const loading = ref(false);

  const onAppendImage = (image: string): void => {
    if (!image) return;

    tempAddedImages.value.push(image);
    imageInput.value = "";
  };

  const createImages = async (categoryId: number) => {
    loading.value = true;

    const imagesReq = tempAddedImages.value.map((image) => ({
      category_id: categoryId,
      url: image
    }));

    const { error } = await supabase.from("images").insert(imagesReq);
    if (error) {
      alertObject(error);
    }

    loading.value = true;
  };

  return {
    tempAddedImages,
    imageInput,
    onAppendImage,
    createImages,
    loading
  };
};
