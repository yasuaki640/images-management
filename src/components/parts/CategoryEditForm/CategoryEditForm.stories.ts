import type { Args, Meta, StoryObj } from "@storybook/vue3";
import CategoryEditForm from "@/components/parts/CategoryEditForm/CategoryEditForm.vue";

const meta: Meta<typeof CategoryEditForm> = {
  title: "CategoryEditForm/CategoryEditForm",
  component: CategoryEditForm,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "number" },
    name: { control: "text" },
    "onUpdate:name": { action: "update:name" }
  },
  args: {
    id: 1,
    name: "Ramen Noodle"
  }
};

export default meta;
type Story = StoryObj<typeof CategoryEditForm>;

export const Default: Story = {
  render: (args: Args) => ({
    components: { CategoryEditForm },
    setup() {
      return { args };
    },
    template: `
      <CategoryEditForm v-bind="args" v-model:name="args.name" />`
  })
};
