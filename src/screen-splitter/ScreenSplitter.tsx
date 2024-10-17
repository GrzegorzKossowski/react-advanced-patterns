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
  Left: React.ElementType;
  Right: React.ElementType;
  leftWidth?: number;
  rightWidth?: number;
  gapWidth?: number;
};

const ScreenSplitter = ({
  Left,
  Right,
  leftWidth = 1,
  rightWidth = 1,
  gapWidth = 0,
}: Props) => {
  return (
    <Container $gap={gapWidth}>
      <Panel $flex={leftWidth}>
        <Left />
      </Panel>
      <Panel $flex={rightWidth}>
        <Right />
      </Panel>
    </Container>
  );
};

export default ScreenSplitter;
