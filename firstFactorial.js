let firstFac = (num) => {
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }

  return num;
};

console.log(firstFac(5));
