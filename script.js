var numSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var numDigitado = document.getElementById("valor").value;
  var numDigitadoN = parseInt(numDigitado);
  var elementoResultado = document.getElementById("resultado");
  var correto = "Você acertou!";
  var maior = "Você errou, o número é menor que " + numDigitadoN;
  var menor = "Você errou, o número é maior que " + numDigitadoN;

  if (numDigitadoN == numSecreto) {
    elementoResultado.innerHTML = correto;
  } else if (numDigitadoN > 10 || numDigitadoN < 0) {
    elementoResultado.innerHTML = "Insira um número entre 0 e 10";
  } else {
    if (numDigitadoN > numSecreto) {
      elementoResultado.innerHTML = maior;
    } else {
      elementoResultado.innerHTML = menor;
    }
  }
}