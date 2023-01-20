import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <About.js />', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: 'About' });
    userEvent.click(about);
    screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
  });
  test('Teste se a página contém dois paragrafos com as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const paragraph1 = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i);
    expect(paragraph1).toBeInTheDocument();
    const paragraph2 = screen.getByText(/One can filter Pokémon by type, and see more details for each one of them/i);
    expect(paragraph2).toBeInTheDocument();
  });
  test('Teste se a página contém uma imagem da Pokédex', () => {
    renderWithRouter(<About />);
    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
