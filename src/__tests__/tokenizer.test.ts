import {tokenize} from '../tokenizer';

describe('tokenize', () => {
  test('Should accept valid formulae', () => {
    expect(tokenize('CuSO4 * 5H2O')).toMatchSnapshot();
    expect(tokenize('(NH4)3PO4')).toMatchSnapshot();
    expect(tokenize('CaCO3')).toMatchSnapshot();
    expect(tokenize('[Cu(NH3)4]SO4')).toMatchSnapshot();
    expect(tokenize('CO')).toMatchSnapshot();
    expect(tokenize('2Cu')).toMatchSnapshot();
    expect(tokenize('CaCaCa')).toMatchSnapshot();
    expect(tokenize('CCC')).toMatchSnapshot();
    expect(tokenize('5H2O*(H2O2)2')).toMatchSnapshot();
  });

  test('Should reject bad formulae', () => {
    expect(() => tokenize('Sooo')).toThrowErrorMatchingInlineSnapshot(`"Parsing Error at position 2: 'o'"`);
  })
})
