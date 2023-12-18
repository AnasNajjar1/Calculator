export function add(number: string) {
  if (number === "") {
    return "0";
  }

  const numbersArray = number.trim().split(/[,\n]/);

  const errors = [];

  if (numbersArray.includes("")) {
    errors.push("The resulting array cannot include empty strings");
  }

  if (numbersArray.filter((n) => parseFloat(n) < 0).length > 0) {
    const negativeNumbersString = numbersArray
      .filter((n) => parseFloat(n) < 0)
      .join(",");
    errors.push("Negative not allowed : " + negativeNumbersString);
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += parseFloat(numbersArray[i]);
  }
  return sum.toFixed(1).toString();
}

export function multiply(number: string) {
  if (number === "") {
    return "0";
  }

  const numbersArray = number.trim().split(/[,\n]/);

  const errors = [];

  if (numbersArray.includes("")) {
    errors.push("The resulting array cannot include empty strings");
  }

  if (numbersArray.filter((n) => parseFloat(n) < 0).length > 0) {
    const negativeNumbersString = numbersArray
      .filter((n) => parseFloat(n) < 0)
      .join(",");
    errors.push("Negative not allowed : " + negativeNumbersString);
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  let product = 1;
  for (let i = 0; i < numbersArray.length; i++) {
    product *= parseFloat(numbersArray[i]);
  }
  return product.toFixed(1).toString();
}
