export const getResource = async (url) => {
  const respone = await fetch(url);
  const result = await respone.json();
  return result;
};
