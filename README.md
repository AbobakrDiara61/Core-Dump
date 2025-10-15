# 🕹️ Core-Dump

A modern, visually stunning gaming website that combines an immersive online store for top titles with free browser-based mini-games. Built by passionate engineers and gamers—by gamers, for gamers.

---

## 🚀 Project Overview

**Core-Dump** is an all-in-one gaming web platform fusing a digital games store with an integrated arcade of online and mini-games. It provides a slick, responsive UI, a feature-rich shop experience, and interactive game-play directly in the browser.

**Key Goals:**
- Deliver a seamless online shopping experience for popular and trending games.
- Offer instant access to playable games (like Memory Game) without installation.
- Provide beautiful, responsive design and intuitive UX.
- Serve as both an e-commerce site and a gaming community portal.

---

## 🧩 Features

- **🎮 Digital Game Store:**  
  Browse, filter, and purchase AAA, indie, and trending titles.
- **🌐 Online Games Section:**  
  Play selected games (e.g., Memory Game) directly in the browser.
- **🛒 Dynamic Shop Filtering:**  
  Filter games by genre with real-time updates.
- **🗂️ Product Details:**  
  Detailed game info page, including genres, sales, ratings, and developer.
- **⭐ Highlights & Trending:**  
  See most played, trending games, and great deals on the main page.
- **🧑‍💻 Authentication:**  
  Login/Signup modal system for account creation (UI-ready, logic extensible).
- **👥 Team/About Page:**  
  Meet the development team and project supervisor.
- **📨 Contact Support:**  
  Contact form for inquiries and support.
- **⚡ Fast, Responsive UI:**  
  Fully tested on desktop and mobile; leverages modern CSS and best practices.

**Planned Features:**
- Wishlist and cart functionality.
- Enhanced user profiles.
- Multi-game platform integration (add more browser games).
- Payment and order processing (full backend).
- Social/community features and reviews.

---

## 🛠️ Tech Stack

- **Frontend:**  
  - HTML5, CSS3 (Modular, Variables, Animations), JavaScript (ES6+)
  - Responsive Modern Design
  - Font Awesome, Google Fonts

- **Assets:**  
  - Optimized images, webfonts, beautiful hero sections

**No backend required to demo UI features.**  
(Shop/game data fetched from a static JSON or a mock online API as of now.)

---

## 📁 Folder Structure

```
Core-Dump/
├── about.html                  # About the team
├── assets/
│   ├── css/                    # Modular CSS (main, global, shop, about, etc)
│   ├── img/                    # Images for products, avatars, interface
│   ├── js/                     # JavaScript (main, shop, auth modals)
│   ├── games/                  # Playable mini-games (Memory Game, etc)
│   ├── webfonts/               # Custom fonts
│   ├── store.ico               # Favicon
│   ├── credits.html            # Credits for resources/assets
│   ├── header.html/footer.html # Header/footer partials (also injected via JS)
│   └── form.html               # Auth modal HTML snippet
├── data/
│   └── games.json              # Local game data (shop, trends, online)
├── contact.html                # Contact/support form
├── details.html                # Product details template
├── index.html                  # Main landing page
├── shop.html                   # Main shop interface
└── README.md                   # You are here!
```

---

## ⚙️ Installation & Setup

> **Requirements:**  
> Just a modern browser—no build tools or servers required for UI demo.

### 1. Clone the Repository

```bash
git clone https://github.com/AbobakrDiara61/Core-Dump.git
cd Core-Dump
```

### 2. Run Locally

> **Option 1: (No Build Step)**  
> Open `index.html` in your browser directly.

> **Option 2: (Recommended - Local HTTP Server for full path compatibility)**
```bash
# With Python 3.x
python -m http.server

# Or with Node.js (if installed)
npx serve .
```
Navigate to `http://localhost:8000` (or the port your tool displays).

All features (navigation, modals, games, filtering) are client-side and require no server setup.

---

## ▶️ Running the Project

- **Landing:** Open `index.html` for all highlights, trending, and featured games.
- **Shop:** Visit `shop.html` for advanced browsing and filtering.
- **About/Contact:** Meet the team or get in touch.
- **Play Online Games:**  
  Navigate to `assets/games/memory_game/index.html` to play Memory Game.

- **Auth Modals:**  
  Click Login/Sign Up in the navbar to trigger UI modals.

---

## 🧠 Architecture & Code Flow

- **HTML:** Modular and semantic (main pages + injected headers/footers via JS).
- **CSS:**  
  - Modular (`css/global.css`, `css/style.css`, `css/shop.css`, etc)
  - CSS Variables (`css/variables.css`)
  - Responsive via media queries
  - Animations for a lively feel
- **JS:**  
  - `main.js`: Injects headers/footers, handles navigation, and modal control.
  - `shop.js`: Fetches game data, renders shop cards, filters by genre.
  - `auth.js`: Handles modal open/close logic, dynamic form switching.
  - `games/memory_game/game.js`: Runs the in-browser memory game board logic.

- **Data Flow:**  
  - Static and remote JSON as "fake backend" (replaceable with real API/backend).
  - Shop/Trending/Online game lists rendered and filtered client-side.

---

## 📦 Dependencies & Configuration

- **Font Awesome** via CDN (for all icons)
- **Google Fonts** (Nunito Sans, Cairo, Josefin Sans)
- **[mocki.io](https://mocki.io/)** as default API for games in shop (can use `data/games.json` for offline/local dev)
- **No sensitive environment variables** are required.

**Customization:**
- To add games: Edit `data/games.json` or update the API link in `shop.js`.
- To add browser games: Place game folders in `assets/games/` and link from shop or main page.

---

## 💡 Usage Examples

- **Filtering Games:**  
  Click "Show All", "Action", or "Racing" in the shop to filter instantly via genre.
  
- **Play Memory Game:**  
  `assets/games/memory_game/index.html` — Browser-based classic match-two gameplay.

- **Adding a Game to Cart (Planned):**  
  Cart buttons/lists are designed in the UI, ready for further logic.

*Screenshots or additional example commands can be added here.*

---

## 🤝 Contributing

**We 💖 collaborators!**  
To contribute or allow AI agents to continue development:

1. Fork and clone the repo.
2. Work on a topic branch.
3. Follow code-style conventions (indentation, modular CSS, semantic HTML).
4. Use only open-source/public domain assets; credit where due (`assets/credits.html`).
5. Open a pull request describing your feature, bug, or enhancement.

**Adding New Games:**  
- To inventory: Add JSON entries in `data/games.json`.
- To playable section: Add to `assets/games/`, update navigation/JS as needed.

**AI Agents:**  
- Scan folder structure and existing code for modularity, and follow the documented architecture.
- Don't hard-code paths; respect modular HTML/CSS patterns.

---

## 💡 Future Enhancements

- 🛒 Full e-commerce backend (cart, purchase, orders)
- 👤 User accounts, library, wishlists
- 🕹️ More browser games (chess, puzzles, multiplayer, etc)
- 📱 Progressive Web App support/faster mobile UX
- 🗣️ Social features (reviews, chat)
- 🌍 Multi-language/localization

---

## 👨‍👩‍👦 Team

**Developers:**  
- Mohamed Abobakr (Front-End Developer)  
- Youssef Alaa (Problem Solver)  
- Yehia Abdallah (Front-End Developer)

**Supervised by:**  
- Eng. Abdelrhman Yasser El-Arabawy

---

## 📄 License

MIT License. See `LICENSE` for details.

---

## 🏦 [Investor Summary]

**Core-Dump** is positioned to become a go-to platform for gamers wanting both a rich store catalog and instant play-ability—all in a highly polished web experience that is ready for e-commerce expansion, community features, and more.

---

*For full demo, just clone and open locally. Feedback welcome!*