//exemplos loops

//for tradicional
for (let voltas:number = 0; voltas < 10; voltas++){
    console.log(`O ciclista deu ${voltas} voltas.`)
}

//for of
const frutas = ['maçã', 'banana', 'laranja'];

for (const fruta of frutas) {
  console.log(fruta);
}

//for in
const pessoa = { nome: 'Ana', idade: 25 };
for (const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`)
}

//forEach
const numeros2 = [1, 2, 3];

numeros2.forEach((num, i) => {
  console.log(`Elemento ${i}: ${num}`);
});

//while
let contador = 0;

while (contador < 5) {
  console.log(`Contador: ${contador}`);
  contador++;
}

//do while
let contador2 = 0;

do {
  console.log(`Contador: ${contador2}`);
  contador2++;
} while (contador2 < 5);

