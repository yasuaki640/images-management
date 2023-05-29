import router from "@/router";

export const useResolveUrl = () => {
  const resolveUrl = (name: string) => {
    const domain = import.meta.env.VITE_DOMAIN;
    const path = router.resolve({ name }).fullPath;
    return domain + path;
  };

  return { resolveUrl };
};
