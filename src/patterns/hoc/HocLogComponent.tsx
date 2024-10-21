import React, { PropsWithChildren } from "react";

const withHocLogComponent = (Component: React.ElementType) => {
  return (props: { title: string } & PropsWithChildren) => {
    console.log(props.title);
    return <Component {...props} />;
  };
};

const HocLogComponent = withHocLogComponent(({ title }) => <>Dupa {title}</>);

const HocLogComponentExample = () => {
  return <HocLogComponent title="Some title" />;
};

export default HocLogComponentExample;
