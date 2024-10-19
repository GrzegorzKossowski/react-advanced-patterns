import React, { PropsWithChildren, useState } from "react";

const StepOne = ({ goNext }: { goNext?: () => void }) => {
  return (
    <>
      <h1>Step One</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }: { goNext?: () => void }) => {
  return (
    <>
      <h1>Step Two</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};

/**
 * Uncontroller Flow. All controll is inside the component.
 * @param children children
 * @returns
 */
const UncontrolledFlow = ({ children }: PropsWithChildren) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const goNext = () => {
    setCurrentStepIndex(prev => prev + 1)
  };
  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement<{ goNext: () => void }>(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

const UncontrolledFlowExample = () => {
  return (
    <UncontrolledFlow>
      <StepOne />
      <StepTwo />
    </UncontrolledFlow>
  );
};

export default UncontrolledFlowExample;
