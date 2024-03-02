import { PROXY } from "@/configs/proxy";

const generateOptions = (body) => {
  return {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": PROXY.key,
      "X-RapidAPI-Host": PROXY.host,
    },
    body: JSON.stringify(body),
  };
};

export const request = async (body) => {
  const options = generateOptions(body);

  const response = await fetch(PROXY.url, options);

  const result = await response.json();

  return result;
};
