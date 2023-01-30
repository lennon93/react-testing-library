import { screen, act } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemon.js />', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<FavoritePokemon />);
    const noFavorite = screen.getByText(/No favorite pokémon found/i);
    expect(noFavorite).toBeInTheDocument();
  });
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pokemon/4');
    });

    const favoritePokemon = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(favoritePokemon);

    act(() => {
      history.push('/favorites');
    });

    const name = screen.getByTestId('pokemon-name');
    const image = screen.getByRole('img', { name: /charmander sprite/i });

    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://archives.bulbagarden.net/media/upload/0/0a/Spr_5b_004.png');
    expect(name).toBeInTheDocument();
  });
});
