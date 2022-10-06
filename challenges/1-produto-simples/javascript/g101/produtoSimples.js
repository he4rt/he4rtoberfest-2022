const getValues = () => {
  /*retorna um array de tipo string removendo os 2 primeiros elementos */
  let numbers = process.argv.slice(2);
  numbers[0] = parseInt(numbers[0]);
  numbers[1] = parseInt(numbers[1]);
  return numbers;
};

const calculateProduct = () => {
  const [value1, value2] = getValues(); /*destructing no array*/
  const PROD = value1 * value2;
  console.log(`produto: ${PROD}`);
};
calculateProduct();
