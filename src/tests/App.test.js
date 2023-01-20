import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('Teste se o topo da aplicação contém um links de navegação Home', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(home);
    screen.getByRole('link', { name: /Home/i });
  });
  test('Teste se o topo da aplicação contém um links de navegação About', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: 'About' });
    userEvent.click(about);
    screen.getByRole('link', { name: /About/i });
  });
  test('Teste se o topo da aplicação contém um links de navegação Pokémon Favoritados', () => {
    renderWithRouter(<App />);
    const favoritePokemon = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(favoritePokemon);
    screen.getByRole('link', { name: /Favorite Pokémon/i });
  });
});
