import type { Meta, StoryObj } from "@storybook/vue3";
import WarningButton from "@/components/parts/Button/WarningButton.vue";

const meta: Meta<typeof WarningButton> = {
  title: "Button/WarningButton",
  component: WarningButton,
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
type Story = StoryObj<typeof WarningButton>;

export const Default: Story = {
  args: { size: "default" }
};

export const Small: Story = {
  args: { size: "small" }
};

export const Large: Story = {
  args: { size: "large" }
};
