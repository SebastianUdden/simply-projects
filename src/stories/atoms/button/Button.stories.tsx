import { ComponentStory } from "@storybook/react";
import styled from "styled-components";
import H2 from "../heading/H2";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";
import QuartenaryButton from "./QuarternaryButton";
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";

export default {
  title: "Atoms/Buttons",
  argTypes: {},
};

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Dark = styled.div`
  margin-top: 10px;
  padding: 20px;
  border-radius: 6px;
  background-color: ${(p) => p.theme.colors.black};
`;

const examples = (darkMode: boolean) => (
  <>
    <Flex>
      <PrimaryButton size="small" darkMode={darkMode}>
        Primary
      </PrimaryButton>
      <PrimaryButton darkMode={darkMode}>Primary</PrimaryButton>
      <PrimaryButton size="large" darkMode={darkMode}>
        Primary
      </PrimaryButton>
    </Flex>
    <br />
    <Flex>
      <SecondaryButton size="small" darkMode={darkMode}>
        Secondary
      </SecondaryButton>
      <SecondaryButton darkMode={darkMode}>Secondary</SecondaryButton>
      <SecondaryButton size="large" darkMode={darkMode}>
        Secondary
      </SecondaryButton>
    </Flex>
    <br />
    <Flex>
      <TertiaryButton size="small" darkMode={darkMode}>
        Tertiary
      </TertiaryButton>
      <TertiaryButton darkMode={darkMode}>Tertiary</TertiaryButton>
      <TertiaryButton size="large" darkMode={darkMode}>
        Tertiary
      </TertiaryButton>
    </Flex>
    <br />
    <Flex>
      <QuartenaryButton size="small" darkMode={darkMode}>
        Quartenary
      </QuartenaryButton>
      <QuartenaryButton darkMode={darkMode}>Quartenary</QuartenaryButton>
      <QuartenaryButton size="large" darkMode={darkMode}>
        Quartenary
      </QuartenaryButton>
    </Flex>
    <br />
    <Flex>
      <Label>Small</Label>
      <Label>Normal</Label>
      <Label>Large</Label>
    </Flex>
    <br />
    <hr />
    <br />
    <PrimaryButton wide darkMode={darkMode}>
      Place order
    </PrimaryButton>
    <br />
    <br />
    <SecondaryButton wide darkMode={darkMode}>
      View details
    </SecondaryButton>
    <br />
    <br />
    <Flex>
      <Label>Full width examples</Label>
    </Flex>
  </>
);

export const All = () => {
  const darkMode = true;
  return (
    <>
      {examples(!darkMode)}
      <Dark>
        <H2 style={{ color: "white", margin: 0 }}>On dark surface</H2>
        {examples(darkMode)}
      </Dark>
    </>
  );
};
export const PrimarySmall: ComponentStory<typeof PrimaryButton> = () => (
  <PrimaryButton size="small">Small</PrimaryButton>
);
export const PrimaryNormal: ComponentStory<typeof PrimaryButton> = () => (
  <PrimaryButton>Normal</PrimaryButton>
);
export const PrimaryLarge: ComponentStory<typeof PrimaryButton> = () => (
  <PrimaryButton>Large</PrimaryButton>
);
export const PrimaryWide: ComponentStory<typeof PrimaryButton> = () => (
  <PrimaryButton wide>Wide</PrimaryButton>
);
export const SecondarySmall: ComponentStory<typeof SecondaryButton> = () => (
  <SecondaryButton size="small">Small</SecondaryButton>
);
export const SecondaryNormal: ComponentStory<typeof SecondaryButton> = () => (
  <SecondaryButton>Normal</SecondaryButton>
);
export const SecondaryLarge: ComponentStory<typeof SecondaryButton> = () => (
  <SecondaryButton>Large</SecondaryButton>
);
export const SecondaryWide: ComponentStory<typeof SecondaryButton> = () => (
  <SecondaryButton wide>Wide</SecondaryButton>
);
