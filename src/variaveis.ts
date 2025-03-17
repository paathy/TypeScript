// Tipos primitivos: boolean, string, number

let ligado:boolean = false;
let nome: string = "Pathy";
let idade: number = 21;
let altura: number = 1.67;

// Tipos especiais, null e undefined
// null
// undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Tpos abrangentes, any e void
// any retorna qualquer tipo, sendo um texto ou nada etc
// void ele é vazio, não retorna nada.

let retorno: void
let retornoView: any = false
////////////////////////////////////////////////// 


//objeto - sem previsibilidade
let produto: object = {
    name: "Pathy",
    cidade: "Recife",
    idade: 21,
};


////////////////////////////////////////////

//objeto tipado - com previsibilidade

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome:"Batom",
    preco: 46.80,
    unidades: 8,
};
/////////////////////////////////////////////

//Arrays: formas de declarar array no TS
let dados: string[] = ["Pathy", "Hennan", "Bolinho"];
let dados2: Array<string> = ["Pathy", "Hennan", "Bolinho"];

let infos: (string | number)[] = ["Pathy", 1, "Hennan", 2, "Bolinho", 3];

////////////////////////////////////////////////////////////////////

//tuplas: com esse tipo devemos respeitar a ordem, como está a seguir com string number e number

let boleto:[string,number, number] = ["agua", 2.90,2];

//////////////////////////////////////////////

//arrays metodos 
dados.pop();
///////////////////////

//Datas
let aniversario:Date = new Date("2025-06-10 21:00")
console.log(aniversario.toString());