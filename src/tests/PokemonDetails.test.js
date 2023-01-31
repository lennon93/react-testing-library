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
  it('Teste se o texto location é mostrado na tela', () => {
    renderWithRouter(<App />);
    const linkDetail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetail);
    const location = screen.getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(location).toBeInTheDocument();
    expect(linkDetail).not.toBeInTheDocument();
  });
  it('Teste se o src das imagens do location são mostrados na tela', () => {
    renderWithRouter(<App />);
    const linkDetail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetail);

    const pokemonLocation = 'Pikachu location';

    const images = screen.getAllByAltText(pokemonLocation);
    expect(images).toHaveLength(2);
    expect(images[0].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(images[1].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(images[0].alt).toBe(pokemonLocation);
    expect(images[1].alt).toBe(pokemonLocation);
  });
  it('Teste se o texto location é mostrado na tela', () => {
    renderWithRouter(<App />);
    const linkDetail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetail);

    const labelFavorite = screen.getByLabelText('Pokémon favoritado?');
    expect(labelFavorite).toBeInTheDocument();
    userEvent.click(labelFavorite);

    const image = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('http://localhost/star-icon.svg');
    expect(image.alt).toBe('Pikachu is marked as favorite');
  });
});
