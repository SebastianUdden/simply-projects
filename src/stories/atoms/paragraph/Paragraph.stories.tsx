import { ComponentStory } from "@storybook/react";
import Byline from "./Byline";
import Lead from "./Lead";
import Paragraph from "./Paragraph";
import PreambleA from "./PreambleA";
import PreambleB from "./PreambleB";
import Small from "./Small";

export default {
  title: "Atoms/Paragraphs",
  argTypes: {},
};

export const All = () => (
  <>
    <Byline>
      Title - (mobileSize/mobileHeight - desktopSize/DesktopHeight)
    </Byline>
    <hr />
    <PreambleA>
      Preamble A - (21/30 - 24/34) Graphic design and typography are utilized to
      support its usability, influencing how the user. This is a preamble
      paragraph with some extra.
    </PreambleA>
    <PreambleB>
      Preamble B - (19/28 - 21/32) Graphic design and typography are utilized to
      support its usability, influencing how the user. This is a preamble
      paragraph with some extra.
    </PreambleB>
    <Lead>
      Lead - (18/28) Good user interface design facilitates finishing the task
      at hand without drawing unnecessary attention to itself. Graphic design
      and typography.
    </Lead>
    <Paragraph>
      Paragraph - (16/26) Good user interface design facilitates finishing the
      task at hand without drawing unnecessary attention to itself. Graphic
      design and typography.
    </Paragraph>
    <Small>
      Small - (13/20) Good user interface design facilitates finishing the task
      at hand without drawing unnecessary attention to itself. Graphic design
      and typography.
    </Small>
    <Byline>
      Byline - (13/20) Good user interface design facilitates finishing the task
      at hand without drawing unnecessary attention to itself. Graphic design
      and typography.
    </Byline>
  </>
);
export const ParagraphPreambleA: ComponentStory<typeof PreambleA> = () => (
  <PreambleA>
    Preamble A - Graphic design and typography are utilized to support its
    usability, influencing how the user. This is a preamble paragraph with some
    extra.
  </PreambleA>
);
export const ParagraphPreambleB: ComponentStory<typeof PreambleB> = () => (
  <PreambleB>
    Preamble B - Graphic design and typography are utilized to support its
    usability, influencing how the user. This is a preamble paragraph with some
    extra.
  </PreambleB>
);
export const ParagraphLead: ComponentStory<typeof Lead> = () => (
  <Lead>
    Lead - Good user interface design facilitates finishing the task at hand
    without drawing unnecessary attention to itself. Graphic design and
    typography.
  </Lead>
);
export const ParagraphDefault: ComponentStory<typeof Paragraph> = () => (
  <Paragraph>
    Paragraph - Good user interface design facilitates finishing the task at
    hand without drawing unnecessary attention to itself. Graphic design and
    typography.
  </Paragraph>
);
export const ParagraphSmall: ComponentStory<typeof Small> = () => (
  <Small>
    Small - Good user interface design facilitates finishing the task at hand
    without drawing unnecessary attention to itself. Graphic design and
    typography.
  </Small>
);
export const ParagraphByline: ComponentStory<typeof Byline> = () => (
  <Byline>
    Byline - Good user interface design facilitates finishing the task at hand
    without drawing unnecessary attention to itself. Graphic design and
    typography.
  </Byline>
);
