export const black = "\x1b[40m  \x1b[0m";
export const white = "\x1b[47m  \x1b[0m";
export function toCell(isBlack: boolean) {
  return isBlack ? black : white;
}
export function repeat(color: string) {
  return {
    times: function (count: number) {
      return new Array(count).join(color);
    },
  };
}
export function fill(length: number, value: boolean) {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}
