import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card title",
  description: "Card description",
  links: [{ url: "/", label: "Label" }],
  color: "#fff",
  bgColor: "#DAE8FC",
};

export const TreeView = Template.bind({});
TreeView.args = {
  title: "The best card",
  description: "A card with a tree view.",
  links: [{ url: "/", label: "Label" }],
  bgColor: "#DAE8FC",
  isOpen: true,
  connectionsUp: [
    {
      id: "1",
      title: "A connection",
    },
  ],
  treeView: {
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
  },
};
