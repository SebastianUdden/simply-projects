import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./Menu";
import { useState } from "react";
import { Brand, Environment } from "../../pages/StartPage";

export default {
  title: "Organisms/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
  const [splitSearch, setSplitSearch] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [brand, setBrand] = useState<Brand>(
    args.brands.find((b) => b.code === "hthdk") || args.brands[0]
  );
  const [environment, setEnvironment] = useState<Environment>(
    args.environments[0]
  );
  return (
    <Menu
      latestSearchQueries={["Bada", "Test", "brand"]}
      onChangeFreeTextSearchQuery={(q) => setSearchQuery(q)}
      currentSearchIndex={1}
      searchQuery={searchQuery}
      brand={brand}
      environment={environment}
      brands={args.brands}
      environments={args.environments}
      splitSearch={splitSearch}
      onChangeBrand={(b) =>
        setBrand(
          args.brands.find((brand) => brand.code === b) || args.brands[0]
        )
      }
      onChangeEnvironment={(e) => setEnvironment(e)}
      onChangeSearchQuery={(s) => setSearchQuery(s)}
      onChangeSplitSearch={(x) => setSplitSearch(x)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  brands: [
    {
      code: "magnet",
      epiUrl: "magnet",
      ecomUrl: "e-shop",
      url: "magnet.co.uk",
    },
    { code: "hthdk", epiUrl: "hth-web", ecomUrl: "e-shop", url: "www.hth.dk" },
    {
      code: "hthse",
      epiUrl: "hth-web-se",
      ecomUrl: "e-shop",
      url: "www.hth.se",
    },
    {
      code: "hthno",
      epiUrl: "hth-web-no",
      ecomUrl: "nettbutikk",
      url: "www.hth.no",
    },
  ],
  environments: ["dev", "prod"],
};
