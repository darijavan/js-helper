Number.prototype.startsWith = function (number) {
  let n = this.valueOf(),
    n1 = Math.floor(Math.log10(n)),
    n2 = Math.floor(Math.log10(number)),
    m = Math.floor(n / Math.pow(10, n1 - n2));

  if (n1 < n2) return false;
  if (m === number) return true;
  return false;
};

Number.prototype.endsWith = function (number) {
  let n = this.valueOf(),
    m = Math.floor(Math.log10(number)),
    o = Math.floor(n / Math.pow(10, m + 1)) * Math.pow(10, m + 1);

  if (n - o == number) return true;
  return false;
}