import { PropsWithChildren } from "react";

const Button = ({
  fontSize = "32px",
  backgroundColor = "gray",
  color = "white",
  text = "Button",
  ...props
}) => {
  return (
    <button
      style={{
        fontSize,
        backgroundColor,
        color,
        ...props,
      }}
    >
      {text}
    </button>
  );
};

const RedButton = (props:PropsWithChildren) => {
  return <Button {...props} backgroundColor="red"/>;
};
const GreenSmallButton = (props:PropsWithChildren) => {
  return <Button {...props} backgroundColor="green" fontSize="12px"/>;
};

const CompositionComponentExample = () => {
  return <>
  <RedButton/>
  <GreenSmallButton/>
  </>;
};

export default CompositionComponentExample;
