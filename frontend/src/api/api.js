//Sending data to server
export const save = async (key, value) => {
  let user = "85a5d3cd-e9d7-4b6b-a262-e29e3ff579ab";

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
  let data = await fetch("http://localhost:5000", {
    method: "GET",
    referrerPolicy: "no-referrer",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  let json = await data.json();

  return json.num.toString();
};
