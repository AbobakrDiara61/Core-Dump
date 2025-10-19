const GAMES_DATA_PATH = "/data/games.json";
let games = null;
// Filter functionality
const filterButtons = document.querySelectorAll('.controls span');

// Get the cards container
const cardsContainer = document.querySelector('.shop-cards');

async function renderGames() {
    try {
        let response = await fetch(GAMES_DATA_PATH);
        let data = await response.json();
        games = [...data.shopGames]; // Access the shopGames array from the JSON
        data.shopGames.forEach(game => {
            const card = createGameCard(game);
            cardsContainer.appendChild(card);
        });
        document.querySelectorAll(".cart-btn")
        .forEach(btn => btn.addEventListener("click", (e) => addToCart(e)));
    } catch (error) {
        console.error('Error fetching games data:', error);
    }
}
renderGames();

function addToCart(e) {
  console.log(e);
}
// Function to create a game card
function createGameCard(game) {
  const {details, gameName} = game;
  const card = document.createElement('article');
  card.classList.add('shop-card');
  
  card.innerHTML = `
      <div class="img-wrapper">
        <img src="${details.imgPath}" alt="${gameName}">
      </div>
      <h3>${gameName}</h3>

      <div class="row">
        <p class="price">
          ${details.sale ? details.salePrice : details.price} 
          ${details.sale ? `<span>${details.price}</span>` : ""}
        </p>
        <div class="rate"><i class="fa-solid fa-star"></i> ${details.rate}</div>
      </div>

      <div class="row">
        <ul class="genre">
        
          ${details.genre.map(gen => `<li>${gen}</li>`).join("")}
        </ul>
        <p class="downloads"><i class="fa-solid fa-download"></i> ${details.downloads}</p>
      </div>

      <button class="cart-btn"><i class="fa-solid fa-cart-shopping"></i></button>
  `;

  return card;
}

function displayGames(games) {
  let gameHtml = "";
  games.forEach(game => gameHtml += createGameCard(game).outerHTML);
  cardsContainer.innerHTML = gameHtml;
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Update active button
    filterButtons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    
    const filter = e.target.dataset.filter;
    if(games === null) {
      renderGames();
      return;
    }

    if (filter === 'all') {
      displayGames(games);
      return;
    }
    
    // Filter games by genre
    const filteredGames = games.filter(game => game.details.genre.some(genre => genre.toLowerCase().includes(filter)));
    displayGames(filteredGames);
  });
});
