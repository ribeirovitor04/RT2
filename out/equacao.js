"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Equacao = /** @class */ (function () {
    function Equacao() {
    }
    Equacao.prototype.calcular = function (a, b, c) {
        if (a === 0) {
            return "O coeficiente 'a' não pode ser zero em uma equação de segundo grau.";
        }
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }
        var raizDelta = Math.sqrt(delta);
        var x1 = (-b + raizDelta) / (2 * a);
        var x2 = (-b - raizDelta) / (2 * a);
        return delta === 0 ? [x1] : [x1, x2];
    };
    return Equacao;
}());
exports.default = Equacao;
