import React, { useState } from "react";
import Modal from "../../modal/Modal";
import { BackgroundImage } from "../bgImage/BackgroundImage";
import "./ChangeBackground.css";
const ChangeBackground = () => {
  const [showModal, setShowModal] = useState(false);
  const [test, setTest] = useState(false);
  const maza = () => {
    if (test === false) {
      setTest(true);
    }
  };
  return (
    <>
      <div className="change_bg_btn">
        <button onClick={() => setShowModal(true)}>Change Background</button>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <div className="ChangeBackground">
          test
          <button onClick={maza}>test</button>
        </div>
      </Modal>
      <BackgroundImage test={test} />
    </>
  );
};

export default ChangeBackground;
