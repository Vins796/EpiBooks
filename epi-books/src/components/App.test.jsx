import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';

import App from '../App';
import Welcome from './Welcome';

// TEST 1
// Test per verificare che venga renderizzato il banner di benvenuto
test("verifica che il messaggio di benvenuto sia presente nel DOM", async () => {
    // Renderizzo APP
    render(<Welcome />);

    // Cerchiamo un elemento nel documento che contiene il testo
    const messaggioBenvenuto = screen.getByText(/Sfoglia il catalogo/i);   
    
    // Mi aspetto che messaggioBenvenuto sia presente nel documento
    expect(messaggioBenvenuto).toBeInTheDocument();
});


// TEST 2
// Test per verificare che vengano renderizzati i libri
test("controllo che vengano renderizzate tante card quanti sono gli oggetti nel file json", async () => {
    // Renderizzo APP
    render(<App />);

    // Attendi che vengano trovati tutti gli elementi
    const books = await screen.findAllByTestId("books-card");

    // Verifica che ci siano 150 libri renderizzati
    expect(books).toHaveLength(150);
    
});


// TEST 3
// Test per verificare che venga renderizzata correttamente commentArea al click della card
test('verifico se commentArea viene renderizzato correttamente', async () => {
    // Renderizzo APP
    render(<App />);
    
    // Cerco il testo specifico della card
    const card = await screen.findByText("Sword of Destiny (The Witcher)");
    // Simulo il click sulla card
    fireEvent.click(card);
    
    // Cerco l'elemento commentArea tramite il testo
    const CommentArea = screen.getByText(/Aggiungi Commento/i);

    // Mi aspetto che CommentArea sia presente nel documento
    expect(CommentArea).toBeInTheDocument();
});


// TEST 4
// Test per verificare il filtro degli utenti in base all'input
test("filtra gli utenti sulla base degli input", async () => {
    // Renderizzo APP
    render(<App />);

    // Trova l'input di ricerca utilizzando il suo attributo placeholder
    const input = screen.getByPlaceholderText(/Inserisci libro/i);

    // Simula il cambiamento dell'input con il valore "the last"
    fireEvent.change(input, { target: { value: "the last" } });

    // Attendi che vengano trovati tutti gli elementi
    const filteredCards = await screen.findAllByTestId("books-card");

    // Verifica che ci siano due elementi presenti
    expect(filteredCards).toHaveLength(2);

    // VMi aspetto che l'emento sia presente nel documento
    expect(screen.getByText("The Last Wish: Introducing the Witcher")).toBeInTheDocument();
});


// TEST 5
// Test per verificare che il bordo si colori di blu
test("il bordo della card cambia al click", async () => {
    // Renderizzo APP
    render(<App />);

    // Trova la prima card
    const card = (await screen.findAllByTestId("books-card"))[0].firstChild;

    // Simula il click sulla card
    fireEvent.click(card);

    // Ottieni lo stile calcolato dell'elemento
    const computedStyle = window.getComputedStyle(card);

    // Verifica che il bordo sia di colore blu
    expect(computedStyle.border).toContain("2px solid blue");
});


// TEST 6
// Test per verificare che al click della seonda card 
test("verifico che al click della seconda card si toglie il bordo della prima card cliccata", async () => {
    // Renderizzo APP
    render(<App />);

    // Trova le card
    const cards = await screen.findAllByTestId("books-card");
    const firstCard = cards[0].firstChild;
    const secondCard = cards[1].firstChild;

    // Simula il click sulla prima card
    fireEvent.click(firstCard);

    // Ottieni lo stile calcolato della prima card
    const computedStyleFirstCard = window.getComputedStyle(firstCard);

    // Verifica che il bordo della prima card sia blu
    expect(computedStyleFirstCard.border).toContain("2px solid blue");

    // Simula il click sulla seconda card
    fireEvent.click(secondCard);

    // Ottieni lo stile calcolato della seconda card
    const computedStyleSecondCard = window.getComputedStyle(secondCard);

    // Verifica che il bordo della seconda card sia blu
    expect(computedStyleSecondCard.border).toContain("2px solid blue");

    // Ottieni nuovamente lo stile calcolato della prima card
    const updatedComputedStyleFirstCard = window.getComputedStyle(firstCard);

    // Verifica che il bordo della prima card sia tornato al valore di default
    expect(updatedComputedStyleFirstCard.border).not.toContain("2px solid blue");
});


// TEST 7
//Verifica che all'avvio della pagina, senza aver cliccato su nessun libro, non ci siano istanze del componente SingleComment all'interno del dom
test("verifico che non ci siano istanze di commenti al caricamento del DOM", () => {
    // Renderizzo APP
    render(<App />);

    const area = screen.queryByText(/scrivi recensione/i);
    const text = screen.queryByText(/rate/i);

    expect(area).not.toBeInTheDocument();
    expect(text).not.toBeInTheDocument();
});


// TEST 8
// Verifica che, cliccando su di un libro con recensione, esse vengano caricate correttamente nel DOM
test("verifico che cliccando su di un libro con recensioni, esse vengano caricate", async () => {
    // Renderizzo APP
    render(<App />);

    const bookCard = await screen.findByText("Sword of Destiny (The Witcher)");
    fireEvent.click(bookCard);

    const comments = await waitFor(() => screen.findAllByTestId("comment"));

    // Mi aspetto che ci siano più di 0 commenti
    // Se il test non funziona è perché mancano i commenti
    expect(comments.length).toBeGreaterThan(0);
});

