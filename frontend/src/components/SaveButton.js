import React, { useContext, useState } from "react";
import Modal from "react-modal";

import { MenuContext } from "../context/MenuContext";

import SaveModal from "./modals/SaveModal";

import styles from "../style/Button.module.css";
import modalStyles from "../style/SaveModal.module.css";

Modal.setAppElement("#root");

const SaveButton = () => {
  const [menu, setMenu] = useContext(MenuContext);
  const [saveModal, setSaveModal] = useState(false);

  const closeModal = () => {
    setSaveModal(false);
    setMenu(false);
  };

  return (
    <>
      <div
        style={menu ? { display: "flex" } : { display: "none" }}
        className={`${styles.button}  ${styles.specialButton}`}
        onClick={() => {
          setSaveModal(!saveModal);
        }}
      >
        S
      </div>
      <Modal
        className={modalStyles.saveModal}
        isOpen={saveModal}
        onRequestClose={closeModal}
      >
        <SaveModal closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default SaveButton;
