export function sumup(zahlen: number[]) {
  return zahlen.reduce(function (acc, val) {
    return acc + val;
  }, 0);
}