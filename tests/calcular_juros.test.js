const { calcularJurosCompostos } = require('../src/calcular_juros');

describe('Teste da função calcularJurosCompostos', () => {
  test('Deve calcular corretamente os juros compostos', () => {
    expect(calcularJurosCompostos(1000, 0.05, 2)).toBeCloseTo(1102.5, 2);
  });

  test('Deve retornar o valor principal quando a taxa e o tempo são 0', () => {
    expect(calcularJurosCompostos(1000, 0, 0)).toBe(1000);
  });

  test('Deve lançar erro para valores negativos', () => {
    expect(() => calcularJurosCompostos(-1000, 0.05, 2)).toThrow("Valores negativos não são permitidos.");
    expect(() => calcularJurosCompostos(1000, -0.05, 2)).toThrow("Valores negativos não são permitidos.");
    expect(() => calcularJurosCompostos(1000, 0.05, -2)).toThrow("Valores negativos não são permitidos.");
  });

  test('Deve retornar o mesmo valor para tempo = 0 (independente da taxa)', () => {
    expect(calcularJurosCompostos(1000, 0.05, 0)).toBe(1000);
    expect(calcularJurosCompostos(1000, 0.1, 0)).toBe(1000);
  });

  test('Deve calcular juros compostos com valores pequenos', () => {
    expect(calcularJurosCompostos(1, 0.01, 1)).toBeCloseTo(1.01, 2);
    expect(calcularJurosCompostos(0.5, 0.02, 3)).toBeCloseTo(0.530604, 6);
  });

  test('Deve calcular juros compostos com tempo longo', () => {
    expect(calcularJurosCompostos(1000, 0.05, 20)).toBeCloseTo(2653.297705, 6);
  });

  test('Deve calcular juros compostos com taxa alta', () => {
    expect(calcularJurosCompostos(1000, 1, 3)).toBeCloseTo(8000, 2);
  });

  test('Deve calcular corretamente para valores próximos de zero', () => {
    expect(calcularJurosCompostos(0.01, 0.01, 1)).toBeCloseTo(0.0101, 4);
  });

  test('Deve calcular corretamente para valores altos de principal', () => {
    expect(calcularJurosCompostos(1_000_000, 0.05, 5)).toBeCloseTo(1276281.5625, 4);
  });
});