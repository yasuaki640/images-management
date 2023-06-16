import type { Meta, StoryObj } from "@storybook/vue3";

import type { Category } from "@/types/Category";
import CategoryTable from "@/components/parts/CategoryList/CategoryTable.vue";

const meta: Meta<typeof CategoryTable> = {
  title: "CategoryTable/CategoryTable",
  component: CategoryTable,
  tags: ["autodocs"],
  argTypes: {
    categories: { control: "array" },
    onRowClick: { action: "onRowClick" }
  },
  args: {
    categories: [
      {
        id: 1,
        name: "test1",
        created_at: "2023/05/30 09:07:36",
        updated_at: "2023/05/30 09:07:36"
      },
      {
        id: 2,
        name: "test2",
        created_at: "2023/05/30 09:07:36",
        updated_at: "2023/05/30 09:07:36"
      },
      {
        id: 3,
        name: "test3",
        created_at: "2023/05/30 09:07:36",
        updated_at: "2023/05/30 09:07:36"
      }
    ] as Category[]
  }
};

export default meta;
type Story = StoryObj<typeof CategoryTable>;

export const Default: Story = {};
