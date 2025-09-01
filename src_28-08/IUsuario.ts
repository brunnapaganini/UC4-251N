//Crio a interface Usuario
//Qualquer objeto ou classe implemente/use esta interface PRECISA seguir as regras dela, ou seja, ter todos os seus atributos, tipos e métodos (se houver)

export interface IUsuario {
    nome:string;
    idade:number;
    falar?():void //o ? é para tornar opcional
}