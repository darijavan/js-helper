Number.prototype.startsWith = function (number) {
  if (typeof (number) === undefined)
    throw new TypeError('Required one parameter but no parameter found');
  let n = this.valueOf(),
    n1 = Math.floor(Math.log10(n)),
    n2 = Math.floor(Math.log10(number)),
    m = Math.floor(n / Math.pow(10, n1 - n2));

  if (n1 < n2) return false;
  if (m === number) return true;
  return false;
};

Number.prototype.endsWith = function (number) {
  if (typeof (number) === undefined)
    throw new TypeError('Required one parameter but no parameter found');
  let n = this.valueOf(),
    m = Math.floor(Math.log10(number)),
    o = Math.floor(n / Math.pow(10, m + 1)) * Math.pow(10, m + 1);

  if (n - o == number) return true;
  return false;
};

Number.prototype.contains = function (number) {
  if (typeof (number) === undefined)
    throw new TypeError('Required one parameter but no parameter found');
  let n = this.valueOf(),
    n1 = Math.floor(Math.log10(n)),
    n2 = Math.floor(Math.log10(number));

  for (let i = 0; i < n1; i += n2 + 1) {
    // TODO
  }
  return false;
};