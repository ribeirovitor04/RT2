"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var adicionar_1 = __importDefault(require("./adicionar"));
var subtrair_1 = __importDefault(require("./subtrair"));
var dividir_1 = __importDefault(require("./dividir"));
var multiplicar_1 = __importDefault(require("./multiplicar"));
var mensagens_1 = __importDefault(require("./mensagens"));
var potencia_1 = __importDefault(require("./potencia"));
var radiciacao_1 = __importDefault(require("./radiciacao"));
var equacao_1 = __importDefault(require("./equacao"));
var msg = new mensagens_1.default;
var iniciar = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Digite os valores e a operacao: \n", function (valor) {
        var conta = valor.split(' ');
        var n1 = Number(conta[0]);
        var n2 = Number(conta[1]);
        var op = conta[2];
        if (conta.length == 1) {
            op = conta[0];
        }
        switch (op) {
            case "Soma":
                var calculo = new adicionar_1.default;
                console.log("O resultado da sua conta \u00E9: ".concat(calculo.calcular(n1, n2), " \n"));
                break;
            case "Subtracao":
                calculo = new subtrair_1.default();
                console.log("O resultado da sua conta \u00E9: ".concat(calculo.calcular(n1, n2), " \n"));
                break;
            case "Divisao":
                calculo = new dividir_1.default();
                console.log("O resultado da sua conta \u00E9: ".concat(calculo.calcular(n1, n2), " \n"));
                break;
            case "Multiplicacao":
                calculo = new multiplicar_1.default();
                console.log("O resultado da sua conta \u00E9: ".concat(calculo.calcular(n1, n2), " \n"));
                break;
            case "Potenciacao":
                calculo = new potencia_1.default();
                console.log("O resultado da sua conta \u00E9: ".concat(calculo.calcular(n1, n2), " \n"));
                break;
            case "Radiciacao":
                calculo = new radiciacao_1.default();
                console.log("O resultado da sua conta \u00E9: ".concat(calculo.calcular(n1, n2), " \n"));
                break;
            case "Equacao":
                rl.close();
                var rlEquacao_1 = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                rlEquacao_1.question("Digite os valores de a, b e c separados por espaço:\n", function (valores) {
                    var coeficientes = valores.split(' ').map(Number);
                    if (coeficientes.length !== 3 || coeficientes.some(isNaN)) {
                        console.log("Entrada inválida! Certifique-se de digitar três números separados por espaço.");
                    }
                    else {
                        var equacao = new equacao_1.default();
                        console.log("O resultado da equa\u00E7\u00E3o \u00E9: ".concat(equacao.calcular(coeficientes[0], coeficientes[1], coeficientes[2]), " \n"));
                    }
                    rlEquacao_1.close();
                    iniciar();
                });
                return;
            case "Sair":
                console.log("At\u00E9 mais...");
                rl.close();
                return;
            default:
                console.log(("Operacao nao reconhecida! \n") +
                    ("Tente: Soma, Subtracao, Multiplicacao, Divisao, Potenciacao, Radiciacao e Equacao \n") +
                    ("Para encerrar digite \"Sair\" \n"));
        }
        rl.close();
        if (op != "Sair") {
            iniciar();
        }
    });
};
msg.boasVindas();
msg.listarOpcoes();
msg.comoUsar();
iniciar();
