export default function sumup( zahlen: number[]) {
  // eslint-disable-next-line arrow-body-style
  return zahlen.reduce((acc, val) => {
    return acc + val;
  }, 0);
}

export function sum(zahlen: number[]) {
  return zahlen.reduce((acc, val) => acc + val, 0);
}
