import type { Meta, StoryObj } from "@storybook/vue3";
import ImageList from "@/components/parts/ImageList/ImageList.vue";

const meta: Meta<typeof ImageList> = {
  title: "ImageList/ImageList",
  component: ImageList,
  tags: ["autodocs"],
  argTypes: {
    images: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof ImageList>;

export const Default: Story = {
  args: {
    images: [
      "https://placehold.jp/400x400.png",
      "https://placehold.jp/400x400.png",
      "https://placehold.jp/400x400.png",
      "https://placehold.jp/400x400.png"
    ]
  }
};

export const Random: Story = {
  args: {
    images: [
      "https://placehold.jp/228x542.png",
      "https://placehold.jp/215x291.png",
      "https://placehold.jp/401x351.png",
      "https://placehold.jp/401x351.png",
      "https://placehold.jp/169x227.png",
      "https://placehold.jp/587x354.png",
      "https://placehold.jp/457x535.png",
      "https://placehold.jp/457x535.png",
      "https://placehold.jp/217x278.png",
      "https://placehold.jp/140x488.png",
      "https://placehold.jp/511x232.png"
    ]
  }
};
