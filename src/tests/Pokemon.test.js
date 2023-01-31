import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado o nome correto do Pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getByText(/pikachu/i);
    expect(pokemon).toBeInTheDocument();
  });
  it('Teste se é renderizado o tipo correto do Pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const type = screen.getByTestId('pokemon-type');
    expect(type.innerHTML).toBe('Electric');
    expect(type).toBeInTheDocument();
  });
  it('Teste se é renderizado o peso correto do Pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const weight = screen.getByText(/Average weight: 6.0 kg/i);
    expect(weight).toBeInTheDocument();
  });
  it('Teste se é renderizado a imagem correta do Pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const image = screen.getByRole('img', { name: /pikachu/i });
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(image.alt).toBe('Pikachu sprite');
  });
  it('Teste se é renderizado a imagem correta do Pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const detail = screen.getByRole('link', { name: /More details/i });
    expect(detail).toHaveProperty('href', 'http://localhost/pokemon/25');
  });
  it('Teste se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);
    const linkDetail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetail);

    const favoritePokemon = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(favoritePokemon);

    const home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(home);

    const image = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('http://localhost/star-icon.svg');
    expect(image.alt).toBe('Pikachu is marked as favorite');
  });
});
