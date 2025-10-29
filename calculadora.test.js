const {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  resto,
  potenciacao,
  raizQuadrada
} = require('./calculadora.js');

describe('Testes para a calculadora', () => {

  describe('soma', () => {
    test('deve somar dois números positivos', () => {
      expect(soma(2, 3)).toBe(5);
    });

    test('deve somar um número positivo e um negativo', () => {
      expect(soma(5, -2)).toBe(3);
    });

    test('deve somar dois números negativos', () => {
      expect(soma(-10, -5)).toBe(-15);
    });

    test('deve somar com zero', () => {
      expect(soma(7, 0)).toBe(7);
    });
  });

  describe('subtracao', () => {
    test('deve subtrair dois números positivos', () => {
      expect(subtracao(10, 4)).toBe(6);
    });

    test('deve subtrair resultando em número negativo', () => {
      expect(subtracao(5, 8)).toBe(-3);
    });

    test('deve subtrair dois números negativos', () => {
      expect(subtracao(-5, -2)).toBe(-3);
    });

    test('deve subtrair um número negativo de um positivo', () => {
      expect(subtracao(10, -3)).toBe(13);
    });
  });

  describe('multiplicacao', () => {
    test('deve multiplicar dois números positivos', () => {
      expect(multiplicacao(3, 4)).toBe(12);
    });

    test('deve multiplicar um número positivo e um negativo', () => {
      expect(multiplicacao(5, -2)).toBe(-10);
    });

    test('deve multiplicar por zero', () => {
      expect(multiplicacao(7, 0)).toBe(0);
    });

    test('deve multiplicar dois números negativos', () => {
      expect(multiplicacao(-3, -4)).toBe(12);
    });
  });

  describe('divisao', () => {
    test('deve dividir dois números positivos', () => {
      expect(divisao(10, 2)).toBe(5);
    });

    test('deve dividir um número negativo por um positivo', () => {
      expect(divisao(-15, 3)).toBe(-5);
    });

    test('deve dividir com resultado decimal', () => {
      expect(divisao(5, 2)).toBe(2.5);
    });

    test('deve lançar um erro ao dividir por zero', () => {
      expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida.");
    });
  });

  describe('resto', () => {
    test('deve retornar o resto da divisão', () => {
      expect(resto(10, 3)).toBe(1);
    });

    test('deve retornar zero quando a divisão é exata', () => {
      expect(resto(10, 2)).toBe(0);
    });

    test('deve lidar com números negativos', () => {
      expect(resto(-10, 3)).toBe(-1);
    });

    test('deve lançar um erro ao tentar obter resto com divisor zero', () => {
      expect(() => resto(5, 0)).toThrow("Divisão por zero não é permitida.");
    });
  });

  describe('potenciacao', () => {
    test('deve elevar um número a um expoente positivo', () => {
      expect(potenciacao(2, 3)).toBe(8);
    });

    test('deve elevar um número ao expoente zero', () => {
      expect(potenciacao(5, 0)).toBe(1);
    });

    test('deve elevar um número a um expoente negativo', () => {
      expect(potenciacao(4, -1)).toBe(0.25);
    });

    test('deve elevar um número negativo a um expoente par', () => {
      expect(potenciacao(-2, 4)).toBe(16);
    });

    test('deve elevar um número negativo a um expoente ímpar', () => {
      expect(potenciacao(-2, 3)).toBe(-8);
    });
  });

  describe('raizQuadrada', () => {
    test('deve calcular a raiz quadrada de um número positivo', () => {
      expect(raizQuadrada(9)).toBe(3);
    });

    test('deve calcular a raiz quadrada de zero', () => {
      expect(raizQuadrada(0)).toBe(0);
    });

    test('deve calcular a raiz quadrada de um número não perfeito', () => {
      expect(raizQuadrada(2)).toBeCloseTo(1.41421356);
    });

    test('deve lançar um erro ao calcular a raiz quadrada de número negativo', () => {
      expect(() => raizQuadrada(-4)).toThrow("Não é possível calcular a raiz quadrada de número negativo.");
    });
  });

});