import { describe } from "vitest";
import { mount } from "@vue/test-utils";
import PrimaryButton from "@/components/parts/Button/PrimaryButton.vue";

describe("PrimaryButton", () => {
  it("renders the label text", () => {
    const wrapper = mount(PrimaryButton, {
      props: { label: "Click me!" }
    });
    expect(wrapper.text()).toContain("Click me!");
  });
});
