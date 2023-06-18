import type { Meta, StoryObj } from "@storybook/vue3";
import TheHeader from "@/components/parts/TheHeader/TheHeader.vue";

const meta: Meta<typeof TheHeader> = {
  title: "TheHeader/TheHeader",
  component: TheHeader,
  tags: ["autodocs"],
  argTypes: {
    isLoggedIn: { control: "boolean" },
    onBackClick: { action: "onBackClick" },
    onLogoutClick: { action: "onLogoutClick" }
  },
  args: {
    isLoggedIn: false
  }
};

export default meta;
type Story = StoryObj<typeof TheHeader>;

export const Default: Story = {};

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true
  }
};
