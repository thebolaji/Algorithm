function AdditivePersistence(num) {
  num = String(num);
  if (num.length === 1) return 0;
  let count = 0;
  while (num.length != 1) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum = parseInt(num[i]);
    }
    count++;
    if (String(num).length === 1) return count;
    num = sum;
  }
}

// KEEP THIS FUNCTION CALL HERE
console.log(AdditivePersistence(1454344565));