import { Animal } from "./Animal";
import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaoCredito } from "./CartaoCredito";
import { Gato } from "./Gato";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";

const animais: Animal[] = [new Cachorro(), new Gato(), new Animal()];

animais.forEach(animal => {
    animal.falar(); 
});


console.log()
const veiculos: Veiculo[] = [new Carro(), new Bicicleta(), new Veiculo()];

veiculos.forEach(veiculo => {
    veiculo.mover(); 
});

console.log()
const pagamentos: Pagamento[] = [new CartaoCredito(), new Boleto(), new Pagamento()];

pagamentos.forEach(pagamento => {
    pagamento.processar(); 
});