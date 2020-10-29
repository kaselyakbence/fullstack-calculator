import React, { useEffect, useState, useContext, useCallback } from "react";

import style from "../../style/LoadModal.module.css";

import { OutputContext } from "../../context/OutputContext";

import { load } from "../../api/api";

const LoadModal = (props) => {
  const [data, setData] = useState([]);

  const [output, setOutput] = useContext(OutputContext);

  const closeModal = useCallback(props.closeModal);

  useEffect(() => {
    const loadData = async () => {
      const result = await load();
      setData(result);
    };
    loadData();
  }, []);

  const handleClick = (num) => {
    setOutput(output + num);
    closeModal();
  };

  return (
    <ul className={style.loadList}>
      {data.map((attr, i) => (
        <li
          key={i}
          className={style.loadListItem}
          onClick={() => handleClick(attr.value)}
        >
          <p>{attr.key}</p>
          <p>{attr.value}</p>
        </li>
      ))}
    </ul>
  );
};

export default LoadModal;
