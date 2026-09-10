const numeroSenha = documento.querySelector('parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textCotent = tamanhoSenha;

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '?!@#$%&*';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = documet.querySelector('#campo-senha');
const checkbox = documet.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumetaTamanho;