// import ScreenSplitter from "./patterns/screen-splitter/ScreenSplitter";
// import ScreenSplitterChildren from "./patterns/screen-splitter/ScreenSplitterChildren";
// import RegularListExample from "./patterns/lists/RegularList";
// import ModalExample from "./patterns/modal/Modal";
// import DataSourceLoaderExample from "./patterns/container-components/DataSourceLoader";
// import RenderPropsLoaderExample from "./patterns/container-components/RenderPropsLoader";
// import LocalStorageLoaderExample from "./patterns/container-components/LocalStorageLoader";
// import UncontrolledComponentExample from "./patterns/controll-component/UncontrolledComponent";
// import UncontrolledFlowExample from "./patterns/controller-flow/UncontrolledFlow";

import ControlledFlowExample from "./patterns/controller-flow/ControllerFlow";

function App() {
  return (
    <>
      <ControlledFlowExample />
      {/* <UncontrolledFlowExample /> */}
      {/* <UncontrolledComponentExample /> */}
      {/* <LocalStorageLoaderExample /> */}
      {/* <RenderPropsLoaderExample /> */}
      {/* <DataSourceLoaderExample /> */}
      {/* <ModalExample /> */}
      {/* <RegularListExample/> */}
      {/* <ScreenSplitterChildren>
        <div>Left Child</div>
        <div>Right Child</div>
      </ScreenSplitterChildren> */}

      {/* <ScreenSplitter Left={() => <>Left</>} Right={() => <>Right</>} /> */}
    </>
  );
}

export default App;
