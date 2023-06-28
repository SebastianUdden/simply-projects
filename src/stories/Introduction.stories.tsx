import styled from "styled-components";
import PrimaryButton from "./atoms/button/PrimaryButton";
import QuartenaryButton from "./atoms/button/QuarternaryButton";
import SecondaryButton from "./atoms/button/SecondaryButton";
import TertiaryButton from "./atoms/button/TertiaryButton";
import H1Big from "./atoms/heading/H1Big";
import Page from "./atoms/page/Page";
import Paragraph from "./atoms/paragraph/Paragraph";

export default {
  title: "Introduction",
};

export const Introduction = () => (
  <Page>
    <H1Big>Nobia Architecture Storybook</H1Big>
    <Paragraph>
      The nobia architecture storybook is a tool that helps visualize the
      structure of the nobia architecture frontend code.
    </Paragraph>
    <Paragraph>
      The <strong>basic premise</strong> of storybook is to have components
      which in turn has stories, a <strong>visual representation</strong> of the
      code. For example a button component could have different stories for each
      type it contains, in our case:
      <UL>
        <li>
          <PrimaryButton>Primary</PrimaryButton>
        </li>
        <li>
          <SecondaryButton>Secondary</SecondaryButton>
        </li>
        <li>
          <TertiaryButton>Tertiary</TertiaryButton>
        </li>
        <li>
          <QuartenaryButton>Quartenary</QuartenaryButton>
        </li>
      </UL>
    </Paragraph>
    <br />
    <Paragraph>
      We've added another layer to the basic storybook premise by dividing the
      components into <strong>different tiers</strong> of complexity based on
      the{" "}
      <a
        href="https://atomicdesign.bradfrost.com/table-of-contents/"
        target="_blank"
      >
        Atomic Design
      </a>{" "}
      principle. The tiers are written out below and we've added examples on
      building a start-page with search using Atomic Design:
      <ul>
        <li>
          <strong>Atoms</strong>: The most basic of components, made from base
          html elements.
        </li>
        <li>
          <strong>Molecules</strong>: Created by combining atoms or other
          molecules.
        </li>
        <li>
          <strong>Organisms</strong>: Created by combining atoms and molecules.
        </li>
        <li>
          <strong>Templates</strong>: Created by combining organisms into page
          components and filling them with placeholder data.
        </li>
        <li>
          <strong>Pages</strong>: An extension using the above page components
          but instead of using placeholder data as the templates do, these
          stories use actual data to preview what the results will look like on
          the website/app.
        </li>
      </ul>
    </Paragraph>
  </Page>
);

const UL = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  li {
    margin-right: 5px;
  }
  li:last-child {
    margin-left: -10px;
  }
`;
