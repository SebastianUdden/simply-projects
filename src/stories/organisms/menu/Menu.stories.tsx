import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./Menu";
import { useState } from "react";

export default {
  title: "Organisms/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
  const [splitSearch, setSplitSearch] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <Menu
      latestSearchQueries={["Bada", "Test", "brand"]}
      onChangeFreeTextSearchQuery={(q) => setSearchQuery(q)}
      currentSearchIndex={1}
      searchQuery={searchQuery}
      splitSearch={splitSearch}
      onChangeSearchQuery={(s) => setSearchQuery(s)}
      onChangeSplitSearch={(x) => setSplitSearch(x)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
