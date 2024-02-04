const value = document.getElementById("output");

let rule = "";

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("add").addEventListener("click", value);
document.getElementById("operator").addEventListener("click", value);
document.getElementById("calculate").addEventListener("click", value);

function clear() {
  document.getElementById("output").textContent = "";
  document.getElementById("output").style.color = "white";
  rule = "";
}
function add(value) {
  document.getElementById("output").textContent += value;
  if (output.textContent.length > 17) {
    document.getElementById("output").style.color = "red";
    output.textContent = "ERROR, terlalu panjang";
  }
  rule += value;
}
function operator(operator) {
  document.getElementById("output").textContent = "";
  if (value.length < 1) {
    document.getElementById("output").textContent = "error";
  } else {
    rule += operator;
  }
}
function calcul() {
  const calculate = eval(rule);
  const result = parseFloat(calculate.toFixed(4));
  if (result !== undefined) {
    output.textContent = result;
  }
  if (output.textContent.length > 17) {
    document.getElementById("output").style.color = "red";
    output.textContent = "ERROR, terlalu panjang";
  }
}
function percent() {
  const nilaiAwal = parseFloat(rule);
  const nilaiSekarang = nilaiAwal / 100;
  output.textContent = nilaiSekarang;
  rule = nilaiSekarang.toString();
}
