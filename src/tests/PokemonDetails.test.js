import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se nome do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);
    const linkDetail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetail);
    const pokemon = screen.getByRole('heading', { level: 2, name: 'Pikachu Details' });
    expect(pokemon).toBeInTheDocument();
  });
  it('Teste se o heading Summary são mostrados na tela', () => {
    renderWithRouter(<App />);
    const linkDetail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetail);
    const summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(summary).toBeInTheDocument();
    const textSummary = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(textSummary).toBeInTheDocument();
  });
  it('Teste se o heading Summary são mostrados na tela', () => {
    renderWithRouter(<App />);
    const linkDetail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetail);
    const location = screen.getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(location).toBeInTheDocument();
  });
});
