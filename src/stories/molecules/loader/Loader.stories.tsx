import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "./Loader";

export default {
  title: "Molecules/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => (
  <Loader onFinishLoading={() => alert("finished loading")} />
);

export const Default = Template.bind({});
Default.args = {};
