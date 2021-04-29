
import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  //inicializa operadores para valores padrão
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  //identifica primeiro e segundo número
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  //recebe números digitados
  concatenarNumero (numAtual: string, numConcat: string): string {
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


  denifirOperacao (operacao: string): void {
    //apenas define operação
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    //efetua o cálculo se operação e numero2 estiverem definidos
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular (): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao)
  }

  //exibe resultado na tela da calculadora
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }
}
