// Run with Node.js. One pulse, dimensionless Omega = 1.
const assert = require('node:assert/strict');
const d = 21 / 221;
const T = 2 * Math.PI * Math.sqrt(221 / 2);
assert.equal(221 * (442 + 42), 121 * 884);
assert.equal(221 * (442 - 42), 100 * 884);

// Spectral projectors of [[1,d],[d,1-2h]] in mass-one coordinates.
// Convert the four quadrature blocks to the free canonical endpoint modes.
function bogoliubov(h, i, j) {
  const r = Math.hypot(h, d);
  const diagonalizer = [[h, d], [d, -h]];
  const scale = [1, Math.pow(1 - 2 * h, 0.25)];
  let c = 0, f = 0, k = 0;
  for (const sign of [1, -1]) {
    const frequency = Math.sqrt(1 - h + sign * r);
    const projector = (Number(i === j) + sign * diagonalizer[i][j] / r) / 2;
    c += projector * Math.cos(T * frequency);
    f += projector * Math.sin(T * frequency) / frequency;
    k -= projector * frequency * Math.sin(T * frequency);
  }
  const qq = scale[i] * c / scale[j];
  const pp = scale[j] * c / scale[i];
  const qp = scale[i] * scale[j] * f;
  const pq = k / (scale[i] * scale[j]);
  return [(qq + pp) / 2, (pq - qp) / 2, (qq - pp) / 2, (pq + qp) / 2];
}
const b = T * d / (4 * (1 - d * d));
const a = d * b;
const step = 1e-6;
for (const [i, j, component, expected] of [[0, 0, 3, -a], [1, 1, 3, -a], [1, 0, 1, -b]]) {
  const derivative = (bogoliubov(step, i, j)[component] - bogoliubov(-step, i, j)[component]) / (2 * step);
  assert.ok(Math.abs(derivative - expected) < 2e-8);
}

// Direct perfect matchings of labelled derivative indices. Multiply each
// contraction by N to use integers, with a diagonal relative-mode identity
// on the bright endpoint. The toy coefficients are A=2, B=3 and D=5.
const factorial = n => n < 2 ? 1 : n * factorial(n - 1);
const choose = (n, k) => factorial(n) / (factorial(k) * factorial(n - k));
function diagonal(n) {
  let total = 0;
  for (let k = 0; 2 * k <= n; ++k) {
    total += choose(n, 2*k) * choose(2*k, k) * Math.pow(10/4, k) * Math.pow(3, n-2*k);
  }
  return total;
}
function match(indices, n, bright) {
  if (!indices.length) return 1;
  let total = 0;
  const [first, ...rest] = indices;
  for (let j = 0; j < rest.length; ++j) {
    const other = rest[j];
    let contraction;
    if (first < n && other < n) contraction = 2;
    else if (first >= n && other >= n) contraction = 5;
    else contraction = 3 + (bright && other === first + n ? n : 0);
    total += contraction * match(rest.filter((_, index) => index !== j), n, bright);
  }
  return total;
}
for (const n of [1, 2, 3, 4, 5]) {
  const indices = Array.from({length: 2*n}, (_, i) => i);
  assert.equal(match(indices, n, false), factorial(n) * diagonal(n));
  let bright = 0;
  for (let k = 0; k <= n; ++k) bright += choose(n,k) * factorial(k) * n**(n-k) * diagonal(k);
  assert.equal(match(indices, n, true), bright);
  const vacuum = n % 2 ? 0 : factorial(n) / factorial(n/2);
  assert.equal(match(indices.slice(0,n), n, false), vacuum);
}
console.log({formalOddsCoefficient: ((b+a)/Math.E)**2, evenVacuumSlope: a/Math.E, checks: 'passed'});
