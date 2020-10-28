interface Number {
  startsWith: (number: number) => boolean;
  endsWith: (number: number) => boolean;
  containsDigit: (number: number) => boolean;
}

interface String {
  reverse: () => String;
}
