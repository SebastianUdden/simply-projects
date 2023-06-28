// @ts-nocheck
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StartPage from "./StartPage";
import { LISTS } from "../data/lists";

export default {
  title: "Pages/Start page",
  component: StartPage,
} as ComponentMeta<typeof StartPage>;

const Template: ComponentStory<typeof StartPage> = (args) => (
  <StartPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  lists: LISTS,
};
