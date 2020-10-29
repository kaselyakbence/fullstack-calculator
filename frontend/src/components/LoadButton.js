import React, { useContext, useState } from "react";
import Modal from "react-modal";

import { MenuContext } from "../context/MenuContext";

import LoadModal from "./modals/LoadModal";

import styles from "../style/Button.module.css";
import modalStyles from "../style/LoadModal.module.css";

const LoadButton = () => {
  const [menu, setMenu] = useContext(MenuContext);
  const [loadModal, setLoadModal] = useState(false);

  const closeModal = () => {
    setLoadModal(false);
    setMenu(false);
  };

  return (
    <>
      <div
        style={menu ? { display: "flex" } : { display: "none" }}
        className={`${styles.button}  ${styles.specialButton}`}
        onClick={() => {
          setLoadModal(!loadModal);
        }}
      >
        L
      </div>
      <Modal
        className={modalStyles.loadModal}
        isOpen={loadModal}
        onRequestClose={closeModal}
      >
        <LoadModal closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default LoadButton;
