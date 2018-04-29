import { filtroPorTitulo } from './foto.pipe';

describe('filtroPorTitulo', () => {
  it('create an instance', () => {
    const pipe = new filtroPorTitulo();
    expect(pipe).toBeTruthy();
  });
});
