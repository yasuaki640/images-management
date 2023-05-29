import type { Meta, StoryObj } from "@storybook/vue3";
import OutlinedButton from "@/components/parts/Button/OutlinedButton.vue";

const meta: Meta<typeof OutlinedButton> = {
  title: "Button/OutlinedButton",
  component: OutlinedButton,
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
type Story = StoryObj<typeof OutlinedButton>;

export const Default: Story = {
  args: { size: "default" }
};

export const Small: Story = {
  args: { size: "small" }
};

export const Large: Story = {
  args: { size: "large" }
};
