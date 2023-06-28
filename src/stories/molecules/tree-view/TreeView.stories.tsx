import { ComponentStory, ComponentMeta } from "@storybook/react";
import TreeView from "./TreeView";

export default {
  title: "Molecules/TreeView",
  component: TreeView,
} as ComponentMeta<typeof TreeView>;

const Template: ComponentStory<typeof TreeView> = (args) => (
  <TreeView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "1",
  bgColor: "orange",
  title: "Webshop",
  isFirst: true,
  connectionsUp: [
    {
      id: "2",
      title: "Webshop checkout api",
      bgColor: "magenta",
      connectionsUp: [
        {
          id: "3",
          title: "Storm api",
          bgColor: "teal",
          connectionsUp: [
            {
              id: "4",
              bgColor: "black",
              title: "Storm",
            },
          ],
        },
      ],
    },
  ],
};

export const MultipleLinks = Template.bind({});
MultipleLinks.args = {
  id: "1",
  bgColor: "orange",
  title: "Webshop",
  isFirst: true,
  connectionsUp: [
    {
      id: "2",
      title: "Webshop checkout api",
      bgColor: "magenta",
      connectionsUp: [
        {
          id: "3",
          title: "Storm api",
          bgColor: "teal",
          connectionsUp: [
            {
              id: "4",
              bgColor: "black",
              title: "Storm",
            },
          ],
        },
        {
          id: "5",
          title: "Nets easy",
          bgColor: "teal",
        },
      ],
    },
  ],
};

export const UpAndDown = Template.bind({});
UpAndDown.args = {
  id: "1",
  bgColor: "orange",
  title: "Webshop",
  isFirst: true,
  connectionsUp: [
    {
      id: "2",
      title: "Webshop checkout api",
      bgColor: "magenta",
      connectionsUp: [
        {
          id: "3",
          title: "Storm api",
          bgColor: "teal",
          connectionsUp: [
            {
              id: "4",
              bgColor: "black",
              title: "Storm",
            },
          ],
        },
        {
          id: "5",
          title: "Nets easy",
          bgColor: "teal",
        },
      ],
    },
  ],
  connectionsDown: [
    {
      id: "7",
      title: "Customer basket",
      bgColor: "forestgreen",
      connectionsDown: [
        {
          id: "8",
          title: "Store display",
          bgColor: "gold",
        },
        {
          id: "9",
          title: "Square display",
          bgColor: "gold",
        },
        {
          id: "10",
          title: "Underwater display",
          bgColor: "gold",
        },
        {
          id: "11",
          title: "Cloud display",
          bgColor: "gold",
        },
      ],
    },
  ],
};
