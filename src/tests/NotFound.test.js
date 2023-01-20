import { screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const notFound = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });
    expect(notFound).toBeInTheDocument();
  });
  test('Teste se a página contém uma imagem da Pokédex', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole('img', { name: /pikachu/i });
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
