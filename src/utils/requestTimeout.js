export const requestTimeout = (seconds) =>
  new Promise((res) => setTimeout(res, seconds * 1000));
