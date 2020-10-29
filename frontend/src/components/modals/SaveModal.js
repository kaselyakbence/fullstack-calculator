import React, { useCallback, useState, useContext } from "react";

import CloseSVG from "../../assets/close.svg";
import CheckSVG from "../../assets/check.svg";

import styles from "../../style/SaveModal.module.css";

import { OutputContext } from "../../context/OutputContext";

import { save } from "../../api/api";

const SaveModal = (props) => {
  const [name, setName] = useState("");

  const closeModal = useCallback(props.closeModal);

  const [output] = useContext(OutputContext);

  const handleSave = async () => {
    let data = await save(name, output);

    if (data.status === 200) {
      closeModal();
    } else if (data.status === 400) {
      console.log("Hibás bevitel");
    }
  };

  return (
    <div className={styles.saveModal}>
      <img
        className={styles.exitButton}
        src={CloseSVG}
        alt="Close"
        onClick={closeModal}
      />
      <div className={styles.saveForm}>
        <input
          className={styles.saveInput}
          type="text"
          pattern={/^[\w.-]*$/}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <img src={CheckSVG} alt="Ok" onClick={handleSave} />
      </div>
      <p>Error</p>
    </div>
  );
};

export default SaveModal;
