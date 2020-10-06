export const save = async (num) => {
  let body = JSON.stringify({
    num,
  });

  console.log(body);

  fetch("http://localhost:5000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },

    body,
  });
};

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
