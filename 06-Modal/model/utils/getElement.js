const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `please check selected "${selection}", no such element exists`
    );
  }
};
export default getElement;
