import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  core: {
    disableTelemetry: true
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      server: {
        watch: {
          ignored: ["**/.env", "**/.env.*"]
        }
      }
    })
};
export default config;
