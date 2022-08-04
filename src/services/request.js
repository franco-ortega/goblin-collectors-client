const { REACT_APP_API_URL } = process.env;

export const getGoblins = async () => {
  await fetch(REACT_APP_API_URL).then((res) => res.json());
};
