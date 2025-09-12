import readlineSync from "readline-sync";
import { Estoque } from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";
import { Brinquedo } from "./Brinquedo";
import { Eletronico } from "./Eletronico";

let contador: boolean = true;

const estoqueLivros = new Estoque<Livro>();
const estoqueRoupas = new Estoque<Roupa>();
const estoqueBrinquedos = new Estoque<Brinquedo>();
const estoqueEletronicos = new Estoque<Eletronico>();

while (contador) {
    console.log(`\n1 - Cadastrar Item`);
    console.log(`2 - Listar Item`);
    console.log(`3 - Remover Item`);
    console.log(`4 - Buscar Item`);
    console.log(`5 - Sair`);

    const opcao = readlineSync.question(`Escolher uma opção de 1 a 5: `);

    switch (opcao) {
        case "1":
            const escolha = readlineSync.question(`Cadastro: Livro, Roupa, Brinquedo ou Eletronico? `);

            if (escolha === "Livro") {

                const titulo = readlineSync.question(`Título do livro: `);
                const autor = readlineSync.question(`Autor do livro: `);
                const precoLivro = readlineSync.question(`Preço do livro: `);
                const livro = new Livro(titulo, autor, parseFloat(precoLivro));
                estoqueLivros.adicionar(livro);
                console.log(`Livro adicionado com sucesso!`, estoqueLivros.listar());
            } else if (escolha === "Roupa") {

                const descricao = readlineSync.question(`Descrição da roupa: `);
                const tamanho = readlineSync.question(`Tamanho da roupa: `);
                const precoRoupa = readlineSync.question(`Preço da roupa: `);
                const roupa = new Roupa(descricao, tamanho, parseFloat(precoRoupa));
                estoqueRoupas.adicionar(roupa);
                console.log(`Roupa adicionada com sucesso!`, estoqueRoupas.listar());
            } else if (escolha === "Brinquedo") {

                const nome = readlineSync.question(`Nome do brinquedo: `);
                const idadeMinima = readlineSync.question(`Idade Minima: `);
                const precoBrinquedo = readlineSync.question(`Preço do brinquedo: `);
                const brinquedo = new Brinquedo(nome, parseFloat(idadeMinima), parseFloat(precoBrinquedo));
                estoqueBrinquedos.adicionar(brinquedo);
                console.log(`Brinquedo adicionado com sucesso!`, estoqueBrinquedos.listar());
            } else if (escolha === "Eletronico") {

                const nomeEletronico = readlineSync.question(`Nome do eletrônico: `);
                const marca = readlineSync.question(`Marca do eletrônico: `);
                const precoEletronico = readlineSync.question(`Preço do eletrônico: `);
                const eletronico = new Eletronico(nomeEletronico, marca, parseFloat(precoEletronico));
                estoqueEletronicos.adicionar(eletronico);
                console.log(`Eletrônico adicionado com sucesso!`, estoqueEletronicos.listar());
            } else {

                console.log(`Opção Inválida!`);
            }
            break;

        case "2":
            const listarEscolha = readlineSync.question(`Listar: Livro, Roupa, Brinquedo ou Eletronico? `);
            if (listarEscolha === "Livro") {

                console.log(`Livros no estoque:`);
                estoqueLivros.listar().forEach(livro => {
                    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Preço: R$ ${livro.preco}`);
                });
            } else if (listarEscolha === "Roupa") {

                console.log(`Roupas no estoque:`);
                estoqueRoupas.listar().forEach(roupa => {
                    console.log(`Descrição: ${roupa.descricao}, Tamanho: ${roupa.tamanho}, Preço: R$ ${roupa.preco}`);
                });
            } else if (listarEscolha === "Brinquedo") {

                console.log(`Brinquedos no estoque:`);
                estoqueBrinquedos.listar().forEach(brinquedo => {
                    console.log(`Nome: ${brinquedo.nome}, Idade Mínima: ${brinquedo.idadeMinima}, Preço: R$ ${brinquedo.preco}`);
                });
            } else if (listarEscolha === "Eletronico") {

                console.log(`Eletrônicos no estoque:`);
                estoqueEletronicos.listar().forEach(eletronico => {
                    console.log(`Modelo: ${eletronico.modelo}, Marca: ${eletronico.marca}, Preço: R$ ${eletronico.preco}`);
                });
            } else {

                console.log(`Opção Inválida!`);
            }
            break;

        case "3":
            const removerEscolha = readlineSync.question(`Remover: Livro, Roupa, Brinquedo ou Eletronico: `);
            const deletar: number = Number(readlineSync.question(`Qual produto deseja remover (digite o índice): `));

            if (removerEscolha === "Livro") {

                estoqueLivros.remover(deletar);
            } else if (removerEscolha === "Roupa") {

                estoqueRoupas.remover(deletar);
            } else if (removerEscolha === "Brinquedo") {

                estoqueBrinquedos.remover(deletar);
            } else if (removerEscolha === "Eletronico") {

                estoqueEletronicos.remover(deletar);
            } else {

                console.log(`Categoria inválida!`);
            }
            break;

        case "4":
            const buscarTipo: string = readlineSync.question(`Buscar por categoria: Livro, Roupa, Brinquedo ou Eletronico: `);

            if (buscarTipo === "Livro") {

                const precoBuscar = parseFloat(readlineSync.question(`Digite o preço máximo para a busca: `));
                console.log(`Livros encontrados:`, estoqueLivros.buscar(item => item.preco <= precoBuscar));
            } else if (buscarTipo === "Roupa") {

                const precoBuscar = parseFloat(readlineSync.question(`Digite o preço máximo para a busca: `));
                console.log(`Roupas encontradas:`, estoqueRoupas.buscar(item => item.preco <= precoBuscar));
            } else if (buscarTipo === "Brinquedo") {

                const precoBuscar = parseFloat(readlineSync.question(`Digite o preço máximo para a busca: `));
                console.log(`Brinquedos encontrados:`, estoqueBrinquedos.buscar(item => item.preco <= precoBuscar));
            } else if (buscarTipo === "Eletronico") {

                const precoBuscar = parseFloat(readlineSync.question(`Digite o preço máximo para a busca: `));
                console.log(`Eletrônicos encontrados:`, estoqueEletronicos.buscar(item => item.preco <= precoBuscar));
            } else {
                
                console.log(`Categoria inválida!`);
            }
            break;

        case "5":
            console.log(`Saindo...`);
            contador = false;
            break;

    }
}
