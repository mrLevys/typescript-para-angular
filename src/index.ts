type heroi = {
  name: string;
  vulgo: string;
};
function printaObjeto(pessoa: heroi){
  console.log(`Olá, ${pessoa.name} ${pessoa.vulgo}, abaixo você verá tipos de variáveis.`);
}
printaObjeto({
  name: "Levy",
  vulgo: "Dev"
})

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Levy";
let idade: number = 30;
let altura: number = 1.70;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipos abrangentes: any, void
let retorno: void   // retorna vazio
let retornoView: any = false // retorna qualquer tipo

// objeto - sem previsibilidade
let produto: object = {
  name: "Levy",
  cidade: "Itapecerica da Serra",
  idade: 35,
}

// obejto tipado com previsibilidade
type ProdutoLoja = {
  nome: string,
  preco: number,
  unidades: number,
}

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.79,
  unidades: 5
}

// Arrays 
// maneiras de declaração
let dados: string[] = ["arr1", "arr2", "arr3", "arr4"];
let dados2: Array<string> = ["arr1", "arr2", "arr3", "arr4"];

// Array multi types, aceita 2 valores independente da ordem
let infos: (string | number)[] = ["Levy", "Dev", 35]

// Tuplas é um array (vetor) de multi types, porém se cria a partir da definição da declaração
let boleto:[string, number, number] = ["água conta", 119.90, 321654001]

// Array métodos (todos os métodos do JS servem no TS)
dados.pop();
console.log(dados)

// Dates
let aniversario: Date = new Date("2023-10-13 23:29")
console.log(aniversario.toString())

// Declaração de Funções
function addNumber (x: number, y: number): number{
  return x + y;
}

function addToHello(name: string): string {
  return `Hello ${name}`;
}

console.log(addToHello("Levy"))

let soma: number = addNumber(4, 5);


// Declaração de Funções multi types
function callToPhone(phone: number | string): number | string {
  return phone;
}

console.log(callToPhone("Ex. retorna number ou string"))

// Declaração de Funções Async
async function getDatabase(id: number): Promise<string>{
  return "Levy";
}

// Interfaces (types x interfaces)
// utilizado para tipar um objeto onde as propriedades sejam as mesmas
type robot = {
  readonly id: string | number;
  name: string;
}
// utilizado para tipar class, nada mais é que um contrato que quem erdar será desse tipo
interface robot2 {
  readonly id: string | number;
  name: string;
  sayHello(): string;
}

const bot1: robot = {
  id: 1,
  name: "megaman",
}

const bot2: robot2 = {
  id: 1,
  name: "gastman",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  }
}

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string){
    this.id = id,
    this.name = name
  }

  sayHello(): string {
    return `Hello i'm ${this.name}`;
  }
  
}

const p = new Pessoa (1, "gutsman");
console.log(p.sayHello());


// ---------------]
// --- Classes
// ---------------]

/*
  data modifiers
  public -  onde todos tem acesso
  private - onde somente a classe tem acesso
  protected - onde a classe e subclasse consegue enxergar
*/

class Character {
  public name?: string; // opcional
  stregth: number;
  skill: number;

  constructor( name:string, streght: number, skill: number){
    this.name = name;
    this.stregth = streght;
    this.skill = skill
  }

  attack():void {
    console.log(`Attack with ${this.stregth} point`)
  }
}
// Character: superClass
// Magician: subClass
class Magician extends Character {
  magicPoints: number;

  constructor(
    name:string, 
    stregth:number, 
    skill:number,
    magicPoints: number
  ) {
    super(name, stregth, skill)
    this.magicPoints = magicPoints;
  }
}

const p1 = new Character ("ryu", 10, 98);
const p2 = new Magician ("Mago", 9, 30, 100);
p1.attack();
p2.attack();


// ---------------]
// --- Generics
// ---------------]
// serve pra deixar em aberto o tipo que será passado no parametro da função.

function concatArray<T>(...itens: T[]): T[]{
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Levy", "Rafael"], ["Silva", "Buarque"]);

console.log(numArray)
console.log(stgArray)

console.log("teste pós ts-node-dev server instalado")

// ---------------]
// --- decorators
// ---------------]
// um conjunto de definições que pode ser usado posteriormente
function apiVersion(version: string) {
  return (target: any) =>{
    Object.assign(target.prototype, {__version: version})
  }
}
// class decorators
@apiVersion("1.10'")
class Api {
  name: string;
  constructor(name:string){
    this.name = name;
  }
}

// attribute decorators
function minLength(length: number) {
  return (target: any, key: string) =>{
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) =>{
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`)
      } else {
        _value = value
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  }
}
class Apiv2 {
  @minLength(3) //seta o tmanho minimo para o decorator
  name: string;
  constructor(name:string){
    this.name = name;
  }
}

const api = new Apiv2("produtos");
console.log(api.name);