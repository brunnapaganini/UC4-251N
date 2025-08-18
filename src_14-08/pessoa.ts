import { Entregador } from "./Entregador";
import { Pacote } from "./Pacote";

const pacote1 = new Pacote("São Paulo", 15);
const entregador1 = new Entregador("João");

entregador1.entregandoPacote(pacote1);
entregador1.trocarEndereco(pacote1,"Rio de Janeiro");
entregador1.entregandoPacote(pacote1);