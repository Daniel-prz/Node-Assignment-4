const arrayToString = (array) => {
  const string = [...array].toString();
  console.log(string);
};
const reverseArray = (array) => {
  const reverse = [...array].reverse();
  console.log(reverse);
};

export { arrayToString, reverseArray };
