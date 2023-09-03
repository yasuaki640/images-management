import type { Args, Meta, StoryObj } from "@storybook/vue3";
import CategoryAddForm from "@/components/parts/CategoryForm/CategoryForm.vue";

const meta: Meta<typeof CategoryAddForm> = {
  title: "CategoryForm/CategoryForm",
  component: CategoryAddForm,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    "onUpdate:name": { action: "update:name" },
    onSubmit: { action: "submit" }
  },
  args: { name: "" }
};

export default meta;
type Story = StoryObj<typeof CategoryAddForm>;

export const Default: Story = {
  render: (args: Args) => ({
    components: { CategoryAddForm },
    setup() {
      return { args };
    },
    template: `
      <CategoryAddForm 
        v-bind="args"
        v-model:name="args.name"
      />`
  })
};
