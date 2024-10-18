import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";

const TopBar = ({
  show,
}: {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={() => show((prev) => !prev)}>X</button>
    </div>
  );
};

const Header = () => {
  return <h3> Header </h3>;
};
const Body = () => {
  return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>;
};
const Footer = () => {
  return <small>Some footer</small>;
};

const ModalStyled = styled.div`
  position: absolute;
  background-color: #f0f0f0;
  border: 1px solid red;
  padding: 10px;
  right: 50px;
  bottom: 50px;
  box-shadow: 5px 5px 15px 5px rgba(100, 100, 100, 0.4);
`;

const Modal = ({
  children,
  show,
}: { show: boolean } & PropsWithChildren): React.ReactNode => {
  if (!show) return;
  return (
    <ModalStyled>
      <div>{children}</div>
    </ModalStyled>
  );
};

Modal.TopBar = TopBar;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

const ModalExample = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"} Modal
      </button>
      <Modal show={show}>
        <Modal.TopBar show={setShow} />
        <Modal.Header />
        <Modal.Body />
        <Modal.Footer />
      </Modal>
    </>
  );
};

export default ModalExample;
