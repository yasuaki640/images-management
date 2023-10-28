import { describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LoginForm from "@/components/parts/LoginForm/LoginForm.vue";

describe("LoginForm", () => {
  it("can not click send button in initial view.", async () => {
    const wrapper = mount(LoginForm, {
      props: {
        email: "",
        sending: false
      }
    });
    await wrapper.get("button").trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("sendMagicLink");
  });

  it("displays error if inputted wrong format email.", async () => {
    const wrapper = mount(LoginForm, {
      props: {
        email: "",
        sending: false
      }
    });

    await wrapper.get("input").setValue("wrong email");
    await wrapper.get("input").trigger("blur");

    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(wrapper.text()).toContain("Please input correct mail address");

    await wrapper.get("button").trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("sendMagicLink");
  });

  it("can not click submit button if inputted wrong format email.", async () => {
    const wrapper = mount(LoginForm, {
      props: {
        email: "",
        sending: false
      }
    });

    await wrapper.get("input").setValue("wrong email");
    await wrapper.get("input").trigger("blur");
    await wrapper.get("button").trigger("click");

    expect(wrapper.emitted()).not.toHaveProperty("sendMagicLink");
  });

  it("can submit with email.", async () => {
    const wrapper = mount(LoginForm, {
      props: {
        email: "",
        sending: false
      }
    });

    await wrapper.setProps({ email: "test@example.com" });
    await wrapper.get("input").trigger("blur");
    await new Promise((resolve) => setTimeout(resolve, 1));
    await wrapper.get("button").trigger("click");

    expect(wrapper.emitted().sendMagicLink).toStrictEqual([["test@example.com"]]);
  });
});
