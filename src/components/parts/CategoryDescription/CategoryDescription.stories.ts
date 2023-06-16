import type { Meta, StoryObj } from "@storybook/vue3";
import CategoryDescription from "@/components/parts/CategoryDescription/CategoryDescription.vue";

const meta: Meta<typeof CategoryDescription> = {
  title: "CategoryDescription/CategoryDescription",
  component: CategoryDescription,
  tags: ["autodocs"],
  argTypes: {
    category: { control: "object" },
    numOfImages: { control: "number" }
  },
  args: {
    category: {
      id: 5,
      name: "Ramen Noodle",
      created_at: "2023-04-23 11:13:13",
      updated_at: "2023-06-11 10:33:44"
    },
    numOfImages: 12
  }
};

export default meta;
type Story = StoryObj<typeof CategoryDescription>;

export const Default: Story = {};
