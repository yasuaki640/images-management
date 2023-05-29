import type { Meta, StoryObj } from "@storybook/vue3";
import TheButton from "@/components/parts/Button/WarningButton.vue";

const meta: Meta<typeof TheButton> = {
  title: "Button/PrimaryButton",
  component: TheButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    size: {
      control: "select",
      options: ["small", "default", "large "]
    }
  },
  args: {
    label: "Button",
    disabled: false,
    loading: false
  }
};

export default meta;
type Story = StoryObj<typeof TheButton>;

export const Default: Story = {
  args: { size: "default" }
};

export const Small: Story = {
  args: { size: "small" }
};

export const Large: Story = {
  args: { size: "large" }
};
