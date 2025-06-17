const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check the selected "${selection}", no such selection exists!`
    );
  }
};
export default getElement;
