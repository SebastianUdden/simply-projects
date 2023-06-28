import { ComponentStory, ComponentMeta } from "@storybook/react";
import H1Big from "../heading/H1Big";
import H5 from "../heading/H5";
import Paragraph from "../paragraph/Paragraph";
import Page from "./Page";

export default {
  title: "Atoms/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <H1Big>Page</H1Big>
      <H5>Space around</H5>
      <Paragraph>20px on sides</Paragraph>
      <hr />
      <H5>Max width</H5>
      <Paragraph>1350px</Paragraph>
      <hr />
      <Paragraph>
        Mustache shabby chic cold-pressed post-ironic chicharrones. Cronut
        tumeric chillwave prism. Gatekeep tousled same keytar. Praxis +1 poke,
        gochujang kogi farm-to-table marfa kinfolk. Intelligentsia franzen
        stumptown af. Banh mi succulents vinyl sartorial thundercats subway tile
        aesthetic forage freegan man braid roof party. Kale chips sustainable
        VHS leggings vape asymmetrical, tumeric before they sold out tattooed
        letterpress locavore pork belly deep v. Four loko twee 3 wolf moon
        slow-carb master cleanse, asymmetrical chambray bitters you probably
        haven't heard of them skateboard gentrify PBR&B whatever tbh. Brooklyn
        +1 neutra, YOLO yr copper mug chia mustache sustainable bitters JOMO la
        croix flexitarian glossier. Craft beer tonx etsy twee ascot, kogi
        sustainable migas whatever irony small batch fit man braid celiac.
        Bitters twee vinyl tilde YOLO before they sold out edison bulb
        vibecession stumptown marfa affogato...
      </Paragraph>
      <Paragraph>
        Butcher af biodiesel, unicorn four loko yr slow-carb helvetica keytar
        fashion axe kale chips pinterest same crucifix. Tacos mlkshk praxis roof
        party fanny pack pug williamsburg actually PBR&B fingerstache gochujang.
        Shabby chic retro 8-bit, tofu lyft dreamcatcher ugh tattooed austin
        unicorn. Sartorial vaporware la croix, butcher squid disrupt jianbing
        polaroid shoreditch tilde helvetica venmo taiyaki meh roof party.
        Organic gentrify copper mug cray crucifix fam listicle skateboard chia
        keffiyeh tofu cornhole green juice. Fingerstache drinking vinegar
        polaroid swag fanny pack slow-carb live-edge praxis neutra.
      </Paragraph>
      <Paragraph>
        Marfa tacos intelligentsia, tofu everyday carry keytar edison bulb swag
        readymade pitchfork gluten-free gastropub direct trade keffiyeh. 90's
        humblebrag kogi drinking vinegar keffiyeh forage, poke mukbang
        letterpress flannel gochujang kombucha. Taxidermy iPhone poutine
        live-edge master cleanse enamel pin fashion axe, tacos williamsburg
        distillery pabst before they sold out vape. Scenester pickled edison
        bulb squid austin, salvia locavore health goth sriracha four dollar
        toast post-ironic humblebrag fanny pack shaman flannel. Vice four loko
        marfa af, raw denim irony direct trade vape tousled bushwick ethical.
      </Paragraph>
    </>
  ),
};
