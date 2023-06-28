import { ComponentStory } from "@storybook/react";
import Byline from "../paragraph/Byline";
import H1 from "./H1";
import H1Big from "./H1Big";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import H6 from "./H6";
import Label from "./Label";
import NavLabel from "./NavLabel";

export default {
  title: "Atoms/Headers",
  argTypes: {},
};

export const All = () => {
  return (
    <>
      <Byline>
        Title - (mobileSize/mobileHeight - desktopSize/DesktopHeight)
      </Byline>
      <hr />
      <H1Big>Header 1 Big (34/40 - 56/64)</H1Big>
      <H1>Header 1 (30/38 - 42/48)</H1>
      <H2>Header 2 (30/38 - 42/48)</H2>
      <H3>Header 3 (22/28 - 32/38)</H3>
      <H4>Header 4 (18/26)</H4>
      <H5>Header 5 (16/22)</H5>
      <H6>Header 6 (15/22)</H6>
      <NavLabel>Nav label (13/20)</NavLabel>
      <br />
      <br />
      <Label>Label (11/15)</Label>
    </>
  );
};
export const Header1Big: ComponentStory<typeof H1Big> = () => (
  <H1Big>Header 1 Big</H1Big>
);
export const Header1: ComponentStory<typeof H1> = () => <H1>Header 1</H1>;
export const Header2: ComponentStory<typeof H2> = () => <H2>Header 2</H2>;
export const Header3: ComponentStory<typeof H3> = () => <H3>Header 3</H3>;
export const Header4: ComponentStory<typeof H4> = () => <H4>Header 4</H4>;
export const Header5: ComponentStory<typeof H5> = () => <H5>Header 5</H5>;
export const Header6: ComponentStory<typeof H6> = () => <H6>Header 6</H6>;
export const _Label: ComponentStory<typeof Label> = () => <Label>Label</Label>;
export const _NavLabel: ComponentStory<typeof Label> = () => (
  <NavLabel>Nav Label</NavLabel>
);
