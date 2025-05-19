const { suma, resta } = require('../src/calculadora');

describe('Funciones de calculadora', () => {
  test('suma 1 + 2 debe ser igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
  });

  test('resta 5 - 3 debe ser igual a 2', () => {
    expect(resta(5, 3)).toBe(2);
  });
});
