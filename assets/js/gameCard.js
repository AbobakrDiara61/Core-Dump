// Game Card Components - extracted from main.js

/**
 * Creates a game card DOM element based on provided props.
 * @param {Object} props
 * @param {string} props.title - Game title
 * @param {string} props.image - Image src URL
 * @param {string|number} props.price - Price (e.g., '$19.99')
 * @param {function} [props.onClick] - Click handler for the Play button
 * @param {string} [props.genre] - (Optional) Genre for badge
 * @param {string[]} [props.platforms] - (Optional) Array of platform names
 * @param {string|number} [props.rating] - (Optional) Game rating
 * @param {string} [props.description] - (Optional) Short description
 * @returns {HTMLElement}
 */
function createGameCard(props) {
    const {
        title,
        image,
        price,
        onClick,
        genre,
        platforms = [],
        rating,
        description
    } = props;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <img class="game-img" src="${image || ''}" alt="${title || ''} Game Cover">
            ${price ? `<div class="price-tag">${price}</div>` : ''}
            ${rating ? `<div class="rating"><i class='fa fa-star'></i> ${rating}</div>` : ''}
        </div>
        <div class="card-content">
            ${genre ? `<span class="genre">${genre}</span>` : ''}
            <div class="game-title">${title || ''}</div>
            ${description ? `<div class="game-description">${description}</div>` : ''}
            ${platforms.length ? `<div class="platform-tags">${platforms.map(p => `<span class="platform">${p}</span>`).join('')}</div>` : ''}
        </div>
        <div class="card-footer">
            <button class="play-btn"><i class="fa-solid fa-play"></i> Play</button>
            <button class="library-btn"><i class="fa-solid fa-plus"></i> Add to Library</button>
        </div>
    `;
    card.querySelector('.play-btn').addEventListener('click', function (e) {
        e.preventDefault();
        if (typeof onClick === 'function') onClick(e);
    });
    return card;
}

/**
 * Injects a GameCard into the specified container selector.
 * @param {string} selector - DOM selector where to inject
 * @param {Object} cardProps - Props for the GameCard (see createGameCard)
 */
function injectGameCard(selector, cardProps) {
    const prohibited = /cart/i;
    if (prohibited.test(window.location.pathname) || (selector && prohibited.test(selector))) return;
    const container = document.querySelector(selector);
    if (!container) return;
    const card = createGameCard(cardProps);
    container.appendChild(card);
}

export { createGameCard, injectGameCard };

