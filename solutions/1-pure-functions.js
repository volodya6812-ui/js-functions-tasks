// BEGIN

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};


const sayPrimeOrNot = (num) => {
  if (isPrime(num)) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

export default sayPrimeOrNot;
// END
