"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mensagens = /** @class */ (function () {
    function Mensagens() {
        this.listarOpcoes = function () {
            console.log("Aqui voc\u00EA pode:");
            console.log("Soma, Subtracao, Multiplicacao ou Dividisao, Potenciacao, Radiciacao e Equacao n\u00FAmeros\n");
        };
        this.comoUsar = function () {
            console.log("Para usar digite os n\u00FAmeros e a op\u00E7\u00E3o de c\u00E1lculo separados por espa\u00E7o como: \"1.5 2.5 Soma\"");
            console.log("Para realizar uma equacao de segundo grau digitar apenas Equacao e seguir as proximas informacoes");
            console.log("Para encerrar digite \"Sair\"\n");
        };
        this.boasVindas = function () {
            console.log('\nBem-vindo a calculadora polimórfica\n');
        };
    }
    return Mensagens;
}());
exports.default = Mensagens;
