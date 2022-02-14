import { LightningElement } from "lwc";

export default class App extends LightningElement {

/*
  Object JavaScript

  {key1:value1, key2: value2, key3: value3}
  nomeObjeto = {
    key1:value1, 
    key2: value2, 
    key3: value3
  };

  Para acessar os valores das KEYS:

  nomeObjeto.key
*/
pessoa = {
  nome: "Wagner Baldin",
  tel: "11-91234-5678",
  idade: 48,
  status: true
};

  /*
  Aqui temos uma lista com 2 valores e 3 chaves em cada valor

  */
 pokemons = [
  {cod: 1, nome: "Pikachu",      tipo:"raio",    nivel: 52},
  {cod: 2, nome: "Charmander",   tipo:"fogo",    nivel: 46},
  {cod: 3, nome: "Chicorita",    tipo:"agua",    nivel: 35},
  {cod: 4, nome: "Mew",          tipo:"vento",   nivel: 22},
  {cod: 5, nome: "Bulbassauro",  tipo:"terra",   nivel: 63},
  {cod: 6, nome: "Taurus",       tipo:"madeira", nivel: 24},
  {cod: 7, nome: "Articuno",     tipo:"lama",    nivel: 31},
  {cod: 8, nome: "Zapdos",       tipo:"pedra",   nivel: 44},
  {cod: 9, nome: "Jinx",         tipo:"poeira",  nivel: 53},
  {cod: 10, nome: "Squartle",    tipo:"grama",   nivel: 61}

];

/**
     * Crie uma lista de objetos com valores relacionadas a personagens da Caverna do Dragão
     * 
     * nome, arma, força, agilidade, inteligencia, estamina * 7 personagens
     * 
     * Exibir os dados em linhas.
     * H1 -> Personagens Caverna do Dragão
     * Dados abaixo
     *
     
     {Id:1, personagem : "Hank", arma:"Arco",forca: 3, agilidade: 9, 
inteligencia: 6, estamina: 4, img:"https://www.absoluteanime.com/dungeons_and_dragons/hank[3].jpg"},
     */

cavDrag = [
  {cod: 1, nome: "Hank",     arma:"Arco",   força: 9,  agilidade: 9,  inteligencia:10, estamina:9},
  {cod: 1, nome: "Erick",    arma:"Escudo", força: 8,  agilidade: 7,  inteligencia:5,  estamina:7},
  {cod: 1, nome: "Bob",      arma:"Clava",  força: 9,  agilidade: 8,  inteligencia:6,  estamina:8},
  {cod: 1, nome: "Diana",    arma:"Bastão", força: 8,  agilidade: 10, inteligencia:9,  estamina:9},
  {cod: 1, nome: "Sheia",    arma:"Capa",   força: 5,  agilidade: 7,  inteligencia:8,  estamina:7},
  {cod: 1, nome: "Presto",   arma:"Capuz",  força: 5,  agilidade: 6,  inteligencia:7,  estamina:6},
  {cod: 1, nome: "Me.Magos", arma:"Magia",  força: 10, agilidade: 7,  inteligencia:10, estamina:10}
];

}
