import type { Meta, StoryObj } from "@storybook/vue3";
import ImageCard from "@/components/parts/ImageCard/ImageCard.vue";

const meta: Meta<typeof ImageCard> = {
  title: "ImageCard/ImageCard",
  component: ImageCard,
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" }
  },
  decorators: [
    () => ({
      template: '<div style="width: 50%; margin-left: auto; margin-right: auto"><story/></div>'
    })
  ]
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const Squrare: Story = {
  args: { image: "https://placehold.jp/400x400.png" }
};

export const Vertically: Story = {
  args: { image: "https://placehold.jp/300x500.png" }
};

export const Horizontally: Story = {
  args: { image: "https://placehold.jp/500x300.png" }
};
