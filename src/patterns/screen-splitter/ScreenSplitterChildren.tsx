import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type ContainerT = {
  $gap: number;
};

const Container = styled.div<ContainerT>`
  display: flex;
  gap: ${({ $gap }) => $gap};
`;

type PanelT = {
  $flex: number;
};

const Panel = styled.div<PanelT>`
  flex: ${({ $flex }) => $flex};
`;

type Props = {
  leftWidth?: number;
  rightWidth?: number;
  gapWidth?: number;
};

const ScreenSplitterChildren = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
  gapWidth = 0,
}: Props & PropsWithChildren) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <Container $gap={gapWidth}>
      <Panel $flex={leftWidth}>{left}</Panel>
      <Panel $flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default ScreenSplitterChildren;
