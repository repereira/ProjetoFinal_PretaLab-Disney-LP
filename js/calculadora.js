function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);
  // evite mexer no código acima!

  const resultado = numero1 + numero2;

  /* use as constantes numero 1 e numero 2 e realize a soma entre elas.
  Em seguida, ao invés de mostrar o numero 10, mostre o resultado da operação */
    document.getElementById("resultadoSoma").innerHTML = resultado;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);
  // evite mexer no código acima!

  const resultado = numero1 - numero2;
  /* use as constantes numero 1 e numero 2 e realize a soma entre elas.
   Em seguida, ao invés de mostrar o numero 9, mostre o resultado da operação */
  
  document.getElementById("resultadoSub").innerHTML = resultado;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);
  // evite mexer no código acima!

  const resultado = numero1 * numero2;
  /* use as constantes numero 1 e numero 2 e realize a soma entre elas.
   Em seguida, ao invés de mostrar o numero 5, mostre o resultado da operação */
  
document.getElementById("resultadoMult").innerHTML = resultado;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);
  // evite mexer no código acima!

  const resultado = numero1 / numero2;
  /* use as constantes numero 1 e numero 2 e realize a soma entre elas.
   Em seguida, ao invés de mostrar o numero -89, mostre o resultado da operação */
  
  
  
document.getElementById("resultadoDiv").innerHTML = resultado;
}
