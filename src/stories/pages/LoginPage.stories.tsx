// @ts-nocheck
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginPage from "./LoginPage";

export default {
  title: "Pages/Login page",
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  password: "iamnobian",
};
