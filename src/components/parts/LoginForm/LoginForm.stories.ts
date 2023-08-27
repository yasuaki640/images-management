import type { Meta, StoryObj } from "@storybook/vue3";
import LoginForm from "@/components/parts/LoginForm/LoginForm.vue";
import { ref } from "vue";

const meta: Meta<typeof LoginForm> = {
  title: "LoginForm/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {
    onSendMagicLink: { action: "sendMagicLink" }
  }
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  render: (args) => ({
    components: { LoginForm },
    setup: () => {
      const email = ref<string>();
      const sending = ref<boolean>();
      return { email, sending, args };
    },
    template: `
      <LoginForm
        v-bind="args"
        v-model:email="email"
        v-model:sending="sending"
      />`
  })
};
