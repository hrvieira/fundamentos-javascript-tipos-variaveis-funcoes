// parâmetros de função

              //2     //2
function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40, "Juliana"));
                      // adicionei = 1 em cada para caso não entre algum número, evitando o NaN
function multiplicacao(n1 = 1, n2 = 1) {
  return n1 * n2;
}

// console.log(multiplicacao(soma(4, 5),soma(3, 3)));

console.log(multiplicacao(soma(4, 5)));