"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjeto(pessoa) {
    console.log(`Olá, ${pessoa.name} ${pessoa.vulgo}, abaixo você verá tipos de variáveis.`);
}
printaObjeto({
    name: "Levy",
    vulgo: "Dev"
});
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Levy";
let idade = 30;
let altura = 1.70;
// tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: any, void
let retorno; // retorna vazio
let retornoView = false; // retorna qualquer tipo
// objeto - sem previsibilidade
let produto = {
    name: "Levy",
    cidade: "Itapecerica da Serra",
    idade: 35,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.79,
    unidades: 5
};
// Arrays 
// maneiras de declaração
let dados = ["arr1", "arr2", "arr3", "arr4"];
let dados2 = ["arr1", "arr2", "arr3", "arr4"];
// Array multi types, aceita 2 valores independente da ordem
let infos = ["Levy", "Dev", 35];
// Tuplas é um array (vetor) de multi types, porém se cria a partir da definição da declaração
let boleto = ["água conta", 119.90, 321654001];
// Array métodos (todos os métodos do JS servem no TS)
dados.pop();
console.log(dados);
// Dates
let aniversario = new Date("2023-10-13 23:29");
console.log(aniversario.toString());
// Declaração de Funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Levy"));
let soma = addNumber(4, 5);
// Declaração de Funções multi types
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone("Ex. retorna number ou string"));
// Declaração de Funções Async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Levy";
    });
}
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "gastman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
