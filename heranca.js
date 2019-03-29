"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var funcionario = /** @class */ (function () {
    function funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    funcionario.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 7.5; }
        console.log(this.nome + " et\u00E1 Pagando " + this.salario * taxa / 100 + " de imposto");
    };
    return funcionario;
}());
var secretario = /** @class */ (function (_super) {
    __extends(secretario, _super);
    function secretario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    secretario.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 50; }
        console.log('Secretario pagando imposto');
        _super.prototype.pagarImposto.call(this, taxa);
    };
    return secretario;
}(funcionario));
var executivo = /** @class */ (function (_super) {
    __extends(executivo, _super);
    function executivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    executivo.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 3000; }
        console.log('Executivo Pagando imposto');
        _super.prototype.pagarImposto.call(this, taxa);
    };
    return executivo;
}(funcionario));
var sarah = new secretario('Sarah', 2000);
sarah.pagarImposto();
var robson = new executivo('Robson', 30000);
robson.pagarImposto();
