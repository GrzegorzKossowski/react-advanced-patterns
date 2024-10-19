import React, { PropsWithChildren, useState } from "react";

type TData = {
  name: string;
  age: number;
};

const StepOne = ({ goNext }: { goNext: (data: TData) => void }) => {
  const [name, setName] = useState("John Doe");
  return (
    <>
      <h3>Step one - name</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => goNext({ name, age: 0 })}>Next</button>
    </>
  );
};
const StepTwo = ({
  goNext,
  data,
}: {
  goNext: (data: TData) => void;
  data: TData;
}) => {
  const [age, setAge] = useState<number>(35);
  return (
    <>
      <h3>Step two - age</h3>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(+e.target.value)}
      />
      <button onClick={() => goNext({ ...data, age })}>Next</button>
    </>
  );
};

const StepThree = ({
  data,
}: {
  goNext: (data: TData) => void;
  data: TData;
}) => {
  return (
    <>
      Step three
      <div>{data.name}</div>
      <div>{data.age}</div>
    </>
  );
};

const ControllerFlow = ({
  children,
  onNext,
  currentStepIndex,
}: {
  onNext: (data: TData) => void;
  currentStepIndex: number;
} & PropsWithChildren) => {
  const goNext = (data: TData) => {
    onNext(data);
  };
  const currentChild = React.Children.toArray(children)[currentStepIndex];
  if (React.isValidElement<{ goNext: (data: TData) => void }>(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};

const ControllerFlowExample = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flowData, setFlowData] = useState<TData>({ name: "", age: 0 });
  const goNext = (data: TData) => {
    setFlowData((prev) => {
      return { ...prev, ...data };
    });
    setCurrentStepIndex((prev) => prev + 1);
  };
  return (
    <ControllerFlow onNext={goNext} currentStepIndex={currentStepIndex}>
      <StepOne />
      <StepTwo data={flowData} />
      <StepThree data={flowData} />
    </ControllerFlow>
  );
};

export default ControllerFlowExample;
