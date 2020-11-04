import { openDB } from "idb";

const getUser = async () => {
  const db = await openDB("Local_Data", 1);
  let user = db.get("User", "userstring");

  return user;
};

//Sending data to serve
export const save = async (key, value) => {
  let user = await getUser();
  let body = {
    key,
    value,
  };

  let data = fetch(`https://www.calc.kaselyakbence.me/api/number/${user}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return data;
};

//Loading data from server
export const load = async () => {
  let user = await getUser();
  let data = await fetch(
    `https://www.calc.kaselyakbence.me/api/number/${user}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let json = await data.json();

  return json;
};
