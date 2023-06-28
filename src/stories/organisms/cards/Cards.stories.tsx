import { ComponentStory, ComponentMeta } from "@storybook/react";
import Cards from "./Cards";

export default {
  title: "Organisms/Cards",
  component: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchQuery: "",
  title: "Cards",
  subtitle: "These are the cards",
  cards: [
    {
      title: "Card title",
      description: "A description",
      links: [{ url: "/", label: "Label" }],
      color: "#000",
      bgColor: "#ddd",
      connectionsUp: [],
      connectionsDown: [],
    },
    {
      title: "Card 2",
      description: "Another card with amazing properties.",
      links: [],
      color: "#222",
      bgColor: "#fff",
      connectionsUp: [],
      connectionsDown: [],
    },
    {
      title: "Card 3",
      description: "A third card, it's ok.",
      links: [],
      color: "#222",
      bgColor: "#fff",
      connectionsUp: [],
      connectionsDown: [],
    },
    {
      title: "Card 4",
      description: "This one is cool.",
      links: [],
      color: "#222",
      bgColor: "#0ff",
      connectionsUp: [],
      connectionsDown: [],
    },
    {
      title: "Card 5",
      description: "What is this?",
      links: [],
      color: "#222",
      bgColor: "#ff0",
      connectionsUp: [],
      connectionsDown: [],
    },
    {
      title: "Card 6",
      description: "This card has seen som stuff.",
      links: [],
      color: "#222",
      bgColor: "#fff",
      connectionsUp: [],
      connectionsDown: [],
    },
    {
      title: "Card 7",
      description: "Some cards are just better than other cards.",
      links: [],
      color: "#000",
      bgColor: "#f0f",
      connectionsUp: [],
      connectionsDown: [],
    },
  ],
};
