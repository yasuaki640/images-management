import type { Args, Meta, StoryObj } from "@storybook/vue3";
import TextInput from "@/components/parts/TextInput/TextInput.vue";

const meta: Meta<typeof TextInput> = {
  title: "TextInput/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    modelValue: { control: "text" },
    "onUpdate:modelValue": { action: "update:modelValue" }
  },
  args: {
    placeholder: "placeholder",
    disabled: false,
    modelValue: ""
  }
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args: Args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: `<TextInput v-bind="args" v-model:model-value="args.modelValue" />`
  })
};

const soLongText = "so long text".repeat(100);
export const Inputted: Story = {
  render: (args: Args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: `<TextInput v-bind="args" v-model:model-value="args.modelValue" />`
  }),
  args: { modelValue: soLongText }
};

export const Disabled: Story = {
  args: { disabled: true }
};
