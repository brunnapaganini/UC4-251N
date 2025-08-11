//1

const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];

for (let i = 0; i < sociedade.length; i++) {
    if(sociedade[i] === "Frodo" 
       || sociedade[i] === "Sam"
       || sociedade[i] === "Merry" 
       || sociedade[i] === "Pippin") {
    console.log(`Hobbit encontrado: ${sociedade[i]}`)
    }
}

//2

type personagens = {
    nome: string;
    jedi: boolean
}
const personagens = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];

for (const persons of personagens) {
    if (persons.jedi === true) {
        console.log(`Jedi encontrado: ${persons.nome}`);
    } else {
        console.log(`Não é Jedi: ${persons.nome}`);
    }
}

//3

const personagem = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
};

for (const personagemNaruto in personagem){
    console.log(`${personagemNaruto} pertence ao clã ${personagem[personagemNaruto as keyof typeof personagem]}`)
}
//4

const personagen = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
];

personagen.forEach((personage, i) =>{
    if (personage.poder > 8000) {
        console.log(`O poder de ${personage.nome} é maior de 8000`)
    }
})

//5

const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let contador = 0

while (contador < pokemons.length) {
    if(pokemons[contador] === "Mewtwo"){
        console.log(`Pokemon lendário capturado ${pokemons[contador]}`)
        break
    } 
    console.log(`Pokemon capturado ${pokemons[contador]}`)
    contador++
}

//6

let passos = 0;
const passosParaMordor = 5;

do {
    console.log(`Passos dados ${passos}`)
    passos++
} while (passos < passosParaMordor){
        console.log(`Chegamos em Mordor`)
}