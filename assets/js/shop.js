// Define all games as an object
const gamesData = {
  "Assassin's Creed Valhalla": {
    details: {
      rate: 4.6,
      price: '$59.99',
      genre: 'Action',
      downloads: 19000000,
      releaseYear: 2020,
      developer: 'Ubisoft Montreal',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'Viking-themed installment in the Assassin\'s Creed series.'
  },
  "Assassin's Creed Mirage": {
    details: {
      rate: 4.3,
      price: '$49.99',
      genre: 'Adventure',
      downloads: 5000000,
      releaseYear: 2023,
      developer: 'Ubisoft Bordeaux',
      imgPath: 'assets/img/game05.jpg'
    },
    brief: 'Return to classic AC gameplay with a focus on stealth in 9th-century Baghdad.'
  },
  "Need For Speed": {
    details: {
      rate: 4.7,
      price: '$59.99',
      genre: 'Racing',
      downloads: 8000000,
      releaseYear: 2021,
      developer: 'Capcom',
      imgPath: 'assets/img/game04.jpg'
    },
    brief: 'First-person horror experience continuing Ethan Winters\' story.'
  },
  "Call of Duty: Modern Warfare": {
    details: {
      rate: 4.5,
      price: '$59.99',
      genre: 'Action',
      downloads: 30000000,
      releaseYear: 2019,
      developer: 'Infinity Ward',
      imgPath: 'assets/img/game06.jpg'
    },
    brief: 'Reboot of the iconic Modern Warfare series with realistic combat.'
  },
  "Call of Duty: Black Ops Cold War": {
    details: {
      rate: 4.2,
      price: '$59.99',
      genre: 'Action',
      downloads: 25000000,
      releaseYear: 2020,
      developer: 'Treyarch',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'Cold War-era shooter with campaign and multiplayer modes.'
  },
  "Battlefield 2042": {
    details: {
      rate: 3.8,
      price: '$59.99',
      genre: 'Action',
      downloads: 15000000,
      releaseYear: 2021,
      developer: 'DICE',
      imgPath: 'assets/img/game07.jpg'
    },
    brief: 'Futuristic large-scale warfare with 128-player battles.'
  },
  "Resident Evil Village": {
    details: {
      rate: 4.7,
      price: '$59.99',
      genre: 'Adventure',
      downloads: 8000000,
      releaseYear: 2021,
      developer: 'Capcom',
      imgPath: 'assets/img/game08.jpg'
    },
    brief: 'First-person horror experience continuing Ethan Winters\' story.'
  },
};

// Convert the object to a Map
const gameInfoMap = new Map(Object.entries(gamesData));

// Get the cards container
const cardsContainer = document.querySelector('.flex-cards');

// Function to create a game card
function createGameCard(gameName, gameData) {
  const card = document.createElement('div');
  card.classList.add('grid-game-card');
  
  card.innerHTML = `
    <div class="img-wrapper">
      <img src="${gameData.details.imgPath}" alt="${gameName}" class="game-card-img">
    </div>
    <p class="game-name">${gameName}</p>
    <span class="genre">${gameData.details.genre}</span>
    <span class="price"><i class="fa-solid fa-cart-shopping"></i>${gameData.details.price}</span>
    <span class="rate"><i class="fa-solid fa-star"></i>${gameData.details.rate}</span>
  `;
  
  return card;
}

// Function to render all games
function renderGames(games) {
  cardsContainer.innerHTML = '';
  games.forEach((gameData, gameName) => {
    const card = createGameCard(gameName, gameData);
    cardsContainer.appendChild(card);
  });
}

// Initial render of all games
renderGames(gameInfoMap);

// Filter functionality
const filterButtons = document.querySelectorAll('.controls span');

filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Update active button
    filterButtons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    
    const filter = e.target.dataset.filter;
    
    if (filter === 'all') {
      renderGames(gameInfoMap);
      return;
    }
    
    // Filter games by genre
    const filteredGames = new Map(
      [...gameInfoMap].filter(([name, data]) => 
        data.details.genre.toLowerCase().includes(filter)
      )
    );
    
    renderGames(filteredGames);
  });
});

// Font Awesome icons (if not already loaded in your project)
document.head.insertAdjacentHTML(
  'beforeend',
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">'
);