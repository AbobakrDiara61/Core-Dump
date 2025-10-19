# Card Injection & Display Architecture

This document explains how the website dynamically displays game cards (for 'online', 'most played', etc.) using reusable JS functions and fetched data.

---

## Functional Structure

### 1. Core Functions in `assets/js/gameCard.js`

- **`createGameCard(props)`**
  - Builds a single card DOM element from a properties object.
  - Props may include:
    - `title`, `image`, `price`, `onClick`, `genre`, `platforms`, `rating`, `description`

- **`injectGameCard(selector, cardProps)`**
  - Injects a card into a designated container found by a CSS selector.
  - Uses the props object to call `createGameCard` and append the result.

- Both functions are exported:

```js
// assets/js/gameCard.js
export { createGameCard, injectGameCard };
```

---

### 2. Dynamic Data Fetch & Injection in `main.js`

Rather than hard-coding games, the homepage now loads data from `data/games.json`:

```js
import { injectGameCard } from './gameCard.js';

document.addEventListener("DOMContentLoaded", function() {
    fetch('data/games.json')
        .then(res => res.json())
        .then(data => {
            // Online Games
            data.onlineGames.forEach(g => {
                injectGameCard("#inject-online", {
                    title: g.gameName,
                    image: g.details.image || g.details.imgPath,
                    price: g.details.price,
                    genre: Array.isArray(g.details.genre) ? g.details.genre[0] : g.details.genre,
                    rating: g.details.rating || g.details.rate,
                    onClick: g.details.onClick ? (e) => { eval(g.details.onClick); } : undefined,
                    description: g.brief,
                    platforms: g.details.platforms || []
                });
            });
            // Most Played
            data.shopGames.forEach(g => {
                injectGameCard("#inject-most-played", {
                    title: g.gameName,
                    image: g.details.image || g.details.imgPath,
                    price: g.details.price,
                    genre: Array.isArray(g.details.genre) ? g.details.genre[0] : g.details.genre,
                    rating: g.details.rating || g.details.rate,
                    onClick: g.details.onClick ? (e) => { eval(g.details.onClick); } : undefined,
                    description: g.brief,
                    platforms: g.details.platforms || []
                });
            });
        });
});
```

---

## Visual Structure

- **Online Cards:** Injected in the section with selector `#inject-online`
- **Most Played Cards:** Injected in the section with selector `#inject-most-played`
- **Cards rely on a consistent HTML structure:**
  - `.card-header`: Image, price, and rating
  - `.card-content`: Title, genre, description, platforms
  - `.card-footer`: Action buttons (Play, Add to Library)

---

## Improvements

- **Separation of Concerns:** Card creation and DOM logic are separated from data-fetching and page logic.
- **Reusability:** Any script can now import and use card injection (including shop or future sections).
- **Flexibility:** Adding new game sections or card types only requires feeding the correct data and a target selector, not new repetitive markup code.
- **Data Driven:** Games are managed centrally in `data/games.json`.

---

## Example Diagram

```
(data/games.json)
   ↓ fetch
(main.js)
   ↓ injectGameCard()
(target DOM: #inject-online, #inject-most-played)
   ↓
[<div class="card"> ... </div>] (for each entry)
```

---

For more details, see the relevant JS files and section comments.

