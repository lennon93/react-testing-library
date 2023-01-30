import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const encounteredPoke = screen.getByRole('heading', { level: 2, name: 'Encountered Pokémon' });
    expect(encounteredPoke).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const nextButton = screen.getByRole('button', { name: 'Próximo Pokémon' });
    userEvent.click(nextButton);
    const nextPokemon = screen.getByText(/Charmander/i);
    expect(nextPokemon).toBeInTheDocument();
    userEvent.click(nextButton);
    const nextPokemon2 = screen.getByText(/caterpie/i);
    expect(nextPokemon2).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const onlyOnePokemon = screen.getAllByTestId('pokemon-name');
    expect(onlyOnePokemon).toHaveLength(1);
  });
  it('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons).toHaveLength(7);
    const buttonAll = screen.getByText('All');
    expect(buttonAll).toBeInTheDocument();
  });
  it('A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo', () => {
    renderWithRouter(<App />);
    const psychicButton = screen.getByText(/Psychic/i);
    userEvent.click(psychicButton);

    const psychicPokemon = screen.getByRole('img', { name: /alakazam/i });
    expect(psychicPokemon).toBeInTheDocument();
    expect(psychicPokemon.src).toBe('https://archives.bulbagarden.net/media/upload/8/88/Spr_5b_065_m.png');

    const nextButton = screen.getByRole('button', { name: 'Próximo Pokémon' });
    userEvent.click(nextButton);

    const psychicPokemon2 = screen.getByRole('img', { name: /mew/i });
    expect(psychicPokemon2).toBeInTheDocument();
    expect(psychicPokemon.src).toBe('https://archives.bulbagarden.net/media/upload/4/43/Spr_5b_151.png');
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const psychicButton = screen.getByText(/Psychic/i);
    userEvent.click(psychicButton);

    const psychicPokemon = screen.getByRole('img', { name: /alakazam/i });
    expect(psychicPokemon).toBeInTheDocument();
    expect(psychicPokemon.src).toBe('https://archives.bulbagarden.net/media/upload/8/88/Spr_5b_065_m.png');

    const buttonAll = screen.getByText('All');
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);

    const inicialPokemon = screen.getByRole('img', { name: /pikachu/i });
    expect(inicialPokemon).toBeInTheDocument();
    expect(inicialPokemon.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });
});
