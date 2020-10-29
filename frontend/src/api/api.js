let user = "1ad166cb-0e3b-48d6-941b-7341c6e4552d";

//Sending data to serve
export const save = async (key, value) => {
  let body = {
    key,
    value,
  };

  let data = fetch(`http://localhost:5555/number/${user}`, {
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
  let data = await fetch(`http://localhost:5555/number/${user}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let json = await data.json();

  return json;
};
