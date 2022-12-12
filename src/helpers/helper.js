export function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

export function findLargestDate(array) {
  const max = array.reduce(function (a, b) { return new Date(a.releasedate) > new Date(b.releasedate) ? a : b; });

  return max;
}

export function findLargestRadius(array) {
  const max = array.reduce(function (a, b) { return a.pl_rade > b.pl_rade ? a : b; });

  return max?.pl_rade;
}

export function temperatureConvert(temp) {
  const celsius = temp-273.15

  return Number((celsius)?.toFixed(3));
}

export function roundUpFloat(number) {
  if (isNaN(Number((number)?.toFixed(2)))) {
    return ""
  }

  return Number((number)?.toFixed(2));
}
