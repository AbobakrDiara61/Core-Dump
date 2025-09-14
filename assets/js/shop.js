const API = "https://mocki.io/v1/46aedb81-856a-4519-b47b-9c288a18d2ad";
let games = null;
// Filter functionality
const filterButtons = document.querySelectorAll('.controls span');

// Get the cards container
const cardsContainer = document.querySelector('.flex-cards');

async function renderGames(api) {
    let response = await fetch(api);
    let data = await response.json();
    games = [...data];
    data.forEach(game => {
      const card = createGameCard(game);
      cardsContainer.appendChild(card);
    })
    document.querySelectorAll(".cart-btn")
    .forEach(btn => btn.addEventListener("click", (e) => addToCart(e)));
}
renderGames(API);

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
      renderGames(API);
      return;
    }

    if (filter === 'all') {
      displayGames(games);
      return;
    }
    
    // Filter games by genre
    filteredGames = games.filter(game => game.details.genre.some(genre => genre.toLowerCase().includes(filter)))
    displayGames(filteredGames);
  });
});
