(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Estudos\Angular\Udemy\Projetos\calculadora\src\main.ts */"zUnb");


/***/ }),

/***/ "0LC+":
/*!*************************************************!*\
  !*** ./src/app/calculadora/components/index.ts ***!
  \*************************************************/
/*! exports provided: CalculadoraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculadora_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora.component */ "ghad");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraComponent", function() { return _calculadora_component__WEBPACK_IMPORTED_MODULE_0__["CalculadoraComponent"]; });




/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dvvl":
/*!**************************************!*\
  !*** ./src/app/calculadora/index.ts ***!
  \**************************************/
/*! exports provided: CalculadoraModule, CalculadoraComponent, CalculadoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculadora_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora.module */ "xi4s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraModule", function() { return _calculadora_module__WEBPACK_IMPORTED_MODULE_0__["CalculadoraModule"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "0LC+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["CalculadoraComponent"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "Wk6h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["CalculadoraService"]; });






/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _calculadora_components_calculadora_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculadora/components/calculadora.component */ "ghad");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-calculadora");
    } }, directives: [_calculadora_components_calculadora_component__WEBPACK_IMPORTED_MODULE_1__["CalculadoraComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TBri":
/*!*************************************************************!*\
  !*** ./src/app/calculadora/services/calculadora.service.ts ***!
  \*************************************************************/
/*! exports provided: CalculadoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraService", function() { return CalculadoraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CalculadoraService {
    constructor() { }
    calcular(num1, num2, operacao) {
        let resultado; // armazena o resultado da operação
        switch (operacao) {
            case CalculadoraService.SOMA:
                resultado = num1 + num2;
                break;
            case CalculadoraService.SUBTRACAO:
                resultado = num1 - num2;
                break;
            case CalculadoraService.DIVISAO:
                resultado = num1 / num2;
                break;
            case CalculadoraService.MULTIPLICACAO:
                resultado = num1 * num2;
                break;
            default:
                resultado = 0;
        }
        return resultado;
    }
}
//Constantes para identificar operações
CalculadoraService.SOMA = '+';
CalculadoraService.SUBTRACAO = '-';
CalculadoraService.DIVISAO = '/';
CalculadoraService.MULTIPLICACAO = '*';
CalculadoraService.ɵfac = function CalculadoraService_Factory(t) { return new (t || CalculadoraService)(); };
CalculadoraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalculadoraService, factory: CalculadoraService.ɵfac });


/***/ }),

/***/ "Wk6h":
/*!***********************************************!*\
  !*** ./src/app/calculadora/services/index.ts ***!
  \***********************************************/
/*! exports provided: CalculadoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculadora_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora.service */ "TBri");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraService", function() { return _calculadora_service__WEBPACK_IMPORTED_MODULE_0__["CalculadoraService"]; });




/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _calculadora__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculadora */ "Dvvl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _calculadora__WEBPACK_IMPORTED_MODULE_3__["CalculadoraModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _calculadora__WEBPACK_IMPORTED_MODULE_3__["CalculadoraModule"]] }); })();


/***/ }),

/***/ "ghad":
/*!*****************************************************************!*\
  !*** ./src/app/calculadora/components/calculadora.component.ts ***!
  \*****************************************************************/
/*! exports provided: CalculadoraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraComponent", function() { return CalculadoraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "Wk6h");


class CalculadoraComponent {
    constructor(calculadoraService) {
        this.calculadoraService = calculadoraService;
    }
    ngOnInit() {
        this.limpar();
    }
    //inicializa operadores para valores padrão
    limpar() {
        this.numero1 = '0';
        this.numero2 = null;
        this.resultado = null;
        this.operacao = null;
    }
    //identifica primeiro e segundo número
    adicionarNumero(numero) {
        if (this.operacao === null) {
            this.numero1 = this.concatenarNumero(this.numero1, numero);
        }
        else {
            this.numero2 = this.concatenarNumero(this.numero2, numero);
        }
    }
    //recebe números digitados
    concatenarNumero(numAtual, numConcat) {
        //caso contanha apenas '0' ou null, reinicia valor
        if (numAtual === "0" || numAtual === null) {
            numAtual = '';
        }
        //primeiro dígito é '.', concatena o '0' antes
        if (numConcat === "." && numAtual === '') {
            return '0.';
        }
        //caso '.' digitado e já contenha um '.', apenas retorna
        if (numConcat === "." && numAtual.indexOf('.') > -1) {
            return numAtual;
        }
        return numAtual + numConcat;
    }
    denifirOperacao(operacao) {
        //apenas define operação
        if (this.operacao === null) {
            this.operacao = operacao;
            return;
        }
        //efetua o cálculo se operação e numero2 estiverem definidos
        if (this.numero2 !== null) {
            this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
            this.operacao = operacao;
            this.numero1 = this.resultado.toString();
            this.numero2 = null;
            this.resultado = null;
        }
    }
    calcular() {
        if (this.numero2 === null) {
            return;
        }
        this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
    }
    //exibe resultado na tela da calculadora
    get display() {
        if (this.resultado !== null) {
            return this.resultado.toString();
        }
        if (this.numero2 !== null) {
            return this.numero2;
        }
        return this.numero1;
    }
}
CalculadoraComponent.ɵfac = function CalculadoraComponent_Factory(t) { return new (t || CalculadoraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["CalculadoraService"])); };
CalculadoraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculadoraComponent, selectors: [["app-calculadora"]], decls: 63, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xs-8", "col-sm-6", "col-md-4"], [1, "text-center", "bg-primary", "img-rounded", "kz-pad-20"], [1, "col-xs-3"], ["type", "button", 1, "btn", "btn-danger", "kz-btn", 3, "click"], [1, "col-xs-9"], ["type", "text", "id", "display", "name", "display", "readonly", "", 1, "form-control", "text-right", "kz-input-text", 3, "value"], ["type", "button", "id", "btn7", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btn8", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btn9", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btnDivisao", 1, "btn", "btn-warning", "kz-btn", 3, "click"], ["type", "button", "id", "btn4", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btn5", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btn6", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btnMIltiplicacao", 1, "btn", "btn-warning", "kz-btn", 3, "click"], ["type", "button", "id", "btn1", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btn2", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btn3", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btnSubtracao", 1, "btn", "btn-warning", "kz-btn", 3, "click"], ["type", "button", "id", "btn0", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btnDecimal", 1, "btn", "btn-default", "kz-btn", 3, "click"], ["type", "button", "id", "btnCalcular", 1, "btn", "btn-success", "kz-btn", 3, "click"], ["type", "button", "id", "btnSoma", 1, "btn", "btn-warning", "kz-btn", 3, "click"]], template: function CalculadoraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_7_listener() { return ctx.limpar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_13_listener() { return ctx.adicionarNumero("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_16_listener() { return ctx.adicionarNumero("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_19_listener() { return ctx.adicionarNumero("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_22_listener() { return ctx.denifirOperacao("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_26_listener() { return ctx.adicionarNumero("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_29_listener() { return ctx.adicionarNumero("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_32_listener() { return ctx.adicionarNumero("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_35_listener() { return ctx.denifirOperacao("*"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_39_listener() { return ctx.adicionarNumero("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_42_listener() { return ctx.adicionarNumero("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_45_listener() { return ctx.adicionarNumero("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_48_listener() { return ctx.denifirOperacao("-"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_52_listener() { return ctx.adicionarNumero("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_55_listener() { return ctx.adicionarNumero("."); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_58_listener() { return ctx.calcular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraComponent_Template_button_click_61_listener() { return ctx.denifirOperacao("+"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.display);
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin: 50px;\n}\n\n.kz-btn[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 4px;\n}\n\n.kz-input-text[_ngcontent-%COMP%] {\n    margin-top: 3px;\n    width:96%;\n  \tmargin-left:6px;\n}\n\n.kz-pad-20[_ngcontent-%COMP%] {\n\tpadding: 20px;\n}\n\n.col-xs-3[_ngcontent-%COMP%], .col-xs-9[_ngcontent-%COMP%] {\n\tpadding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGFkb3JhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7R0FDVixlQUFlO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6ImNhbGN1bGFkb3JhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4ua3otYnRuIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogNHB4O1xufVxuXG4ua3otaW5wdXQtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIHdpZHRoOjk2JTtcbiAgXHRtYXJnaW4tbGVmdDo2cHg7XG59XG5cbi5rei1wYWQtMjAge1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29sLXhzLTMsIC5jb2wteHMtOSB7XG5cdHBhZGRpbmc6IDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xi4s":
/*!***************************************************!*\
  !*** ./src/app/calculadora/calculadora.module.ts ***!
  \***************************************************/
/*! exports provided: CalculadoraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraModule", function() { return CalculadoraModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "0LC+");
/* harmony import */ var _services_calculadora_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/calculadora.service */ "TBri");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CalculadoraModule {
}
CalculadoraModule.ɵfac = function CalculadoraModule_Factory(t) { return new (t || CalculadoraModule)(); };
CalculadoraModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CalculadoraModule });
CalculadoraModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _services_calculadora_service__WEBPACK_IMPORTED_MODULE_2__["CalculadoraService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CalculadoraModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_1__["CalculadoraComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_components__WEBPACK_IMPORTED_MODULE_1__["CalculadoraComponent"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map