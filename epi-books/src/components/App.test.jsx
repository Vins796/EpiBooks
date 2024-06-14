import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';

import App from '../App';
import Welcome from './Welcome';

// TEST 1
// Test per verificare che venga renderizzat il banner di benvenuto
test("verifica che un elemento appaia dopo un clic", async () => {
    render(<Welcome />);

    // Cerchiamo un elemento nel documento che contiene il testo
    const messaggioBenvenuto = screen.getByText(/Sfoglia il catalogo/i);   
    
    expect(messaggioBenvenuto).toBeInTheDocument();
});


// TEST 2
// Test per verificare che vengano renderizzati i libri
test("controllo che vengano renderizzate tante card quanti sono gli oggetti nel file json", async () => {

    render(<App />);

    // Attendi che vengano trovati tutti gli elementi
    const books = await screen.findAllByTestId("books-card");

    // Verifica che ci siano 10 libri renderizzati
    expect(books).toHaveLength(150);
    
});


// TEST 3
// Test per verificare che venga renderizzata correttamente commentArea al click della card
test('verifico se comment are viene renderizzato correttamente', async () => {

    render(<App />);
  
    const card = await screen.findByText("Sword of Destiny (The Witcher)");
    fireEvent.click(card);
  
    const CommentArea = screen.getByText(/Aggiungi Commento/i);
  
    expect(CommentArea).toBeInTheDocument();
});


// TEST 4
// Test per verificare il filtro degli utenti in base all'input
test("filtra gli utenti sulla base degli input", async () => {

    render(<App />);

    // Trova l'input di ricerca utilizzando il suo attributo placeholder
    const input = screen.getByPlaceholderText(/Inserisci libro/i);

    // Simula il cambiamento dell'input con il valore "Leanne"
    fireEvent.change(input, { target: { value: "the last" } });

    // Attendi che vengano trovati tutti gli elementi "heading" di livello 3 (h3)
    const filteredCards = await screen.findAllByTestId("books-card");

    // Verifica che ci sia un solo utente renderizzato
    expect(filteredCards).toHaveLength(2);

    // Verifica che l'utente "Leanne Graham" sia presente nella lista
    expect(screen.getByText("The Last Wish: Introducing the Witcher")).toBeInTheDocument();
});


// TEST 5
// Test per verificare che il bordo si colori di rosso
test("il bordo della card cambia al click", async () => {

    render(<App />);

    // Trova la card 
    const card = await screen.findAllByTestId("books-card");

    // Simula il click sulla card
    fireEvent.click(card[0]);

    // Verifica che la card abbia il bordo blu applicato
    expect(card[0]).toHaveStyle('border: 2px solid blue');
});



