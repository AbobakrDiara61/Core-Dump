
// Get the header container element
const headerContainer = document.querySelector('.header-container');
// Create the footer HTML as a string
const headerContent = `
    <header class="header" id="header">
        <!-- Left Section -->
            <div class="logo-container">
            <a href="/" class="home-link">
                <div class="logo-img-contianer" id="logo-img-contianer"><i class="fa-brands fa-gitkraken"></i></div>
                <h1 class="header-title">Gaming Website</h1>
            </a>
            </div>
        <!-- Center Section -->
            <nav class="nav" aria-label="Main navigation" id="main-nav">
            <ul class="links">
                <li>
                    <a href="/" class="home-link"><!-- <i class="fa-solid fa-house"></i> -->Home</a>
                </li>
                <li>
                    <a href="shop.html"><!-- <i class="fa-solid fa-bag-shopping"></i> -->Shop</a>
                </li>
                <li>
                    <a href="details.html"><!-- <i class="fa-brands fa-product-hunt"></i> -->Product Details</a>
                </li>
                <li>
                    <a href="about.html">About Us</a>
                </li>
                <li>
                    <a href="contact.html">Contact Us</a>
                </li>
            </ul>
            </nav>
            <!-- Right Section -->
            <form id="search" action="#">
            <div class="search-box">
                <input class="search-input"type="text" name="" placeholder="Search">
                <button class="serach-btn"><i class="fa-brands fa-searchengin"></i></button>
            </div>
        </form>
        <button class="login-btn btns" id="login-btn"><i class="fa-solid fa-right-to-bracket"></i>Login</button>
        <button class="sign-up-btn btns" id="sign-up-btn"><i class="fa-solid fa-user-plus"></i>Sign Up</button>
    </header>
`;
// Append the header content to the header container
headerContainer.innerHTML = headerContent;
// Smooth home navigation for both logo and home link
document.querySelectorAll('.home-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // If already on homepage, smooth scroll to top
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        // Otherwise, let the normal href="/" navigation happen
    });
});
const footerHTML = `
<div class="footer-container">
    <!-- Copyright Text -->
    <!-- <p class="copyright">© 2025 Gaming Website. All rights reserved. | Built by gamers, for gamers - the ultimate showcase platform.</p>
        -->
    <!-- Social Links -->
    <ul class="social-links">
        <li class="social-item">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook-f social-icon"></i>
            </a>
        </li>
        <li class="social-item">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter social-icon"></i>
            </a>
        </li>
        <li class="social-item">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram social-icon"></i>
            </a>
        </li>
        <li class="social-item">
            <a href="/contact">
                <i class="fas fa-envelope social-icon"></i>
            </a>
        </li>
    </ul>
    <!-- Copyright Text -->
    <p class="copyright"><i class="fa-solid fa-copyright"></i> 2025 Gaming Website. All rights reserved. | Built by gamers, for gamers - the ultimate showcase platform.</p>
</div>
`;
// Get the footer element and append the HTML
document.querySelector('footer.site-footer').innerHTML = footerHTML;

const authModal = `
        <div class="auth-modal" id="auth-login">
            <button class="close"><i class="fa-solid fa-circle-xmark"></i></button>
            <h3 class="auth-header">Login </h3>
            <form action="">
                <div class="form-group">
                    <label for="login-email">Email</label>
                    <input type="email" name="email" id="login-email" required>
                </div>
                <div class="form-group">
                    <label for="login-pass">Password</label>
                    <input type="password" name="pass" id="login-pass" required>
                </div>
                <div class="form-options">
                    <input type="checkbox" name="rem" id="login-rem">
                    <label for="login-rem">Remember Me</label>
                    <a href="" class="forget-pass">Forgot Password?</a>
                </div>
                <button type="submit" name="auth-login-btn" id="auth-login-btn">Login</button>
                <!-- <button type="submit" name="login" id="login"></button> -->
            </form>
            <div class="social-buttons">
                <button class="btn-social google"><i class="fa-brands fa-google"></i></button>
                <button class="btn-social facebook"><i class="fa-brands fa-facebook-f"></i></button>
            </div>
        </div>
        <div class="auth-modal" id="auth-sign-up">
            <button class="close"><i class="fa-solid fa-circle-xmark"></i></button>
            <h3 class="auth-header">Create Your Account</h3>
            <form action="">
                <div class="form-group">
                    <label for="signup-name">Full Name</label>
                    <input type="text" name="name" id="signup-name" required>
                </div>
                <div class="form-group">
                    <label for="signup-email">Email</label>
                    <input type="email" name="email" id="signup-email" required>
                </div>
                <div class="form-group">
                    <label for="signup-pass">Password</label>
                    <input type="password" name="pass" id="signup-pass" required>
                </div>
                <div class="form-group">
                    <label for="signup-conf-pass">Confirm Password</label>
                    <input type="password" name="confirm_password" id="signup-conf-pass" required>
                </div>
                <div class="form-options">
                    <input type="checkbox" name="rem" id="signup-rem">
                    <label for="signup-rem">Remember Me</label>
                    <a href="" class="forget-pass">Forgot Password?</a>
                </div>
                <button type="submit" name="auth-sign-up-btn" id="auth-sign-up-btn">Sign Up</button>
                <!-- <button type="submit" name="login" id="login"></button> -->
            </form>
            <div class="social-buttons">
                <button class="btn-social google"><i class="fa-brands fa-google"></i></button>
                <button class="btn-social facebook"><i class="fa-brands fa-facebook-f"></i></button>
            </div>
        </div>
`;
document.querySelector('.auth-container').innerHTML = authModal;

// Animations
document.addEventListener('DOMContentLoaded', function() {
const sections = document.querySelectorAll('.section-animate');
let lastScrollPosition = window.scrollY;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const currentScroll = window.scrollY;
        const isScrollingDown = currentScroll > lastScrollPosition;
        lastScrollPosition = currentScroll;
        
        if (entry.isIntersecting) {
            // Scrolling down into view
            entry.target.classList.remove('animate-out');
            entry.target.classList.add('animate-in');
        } else {
            // Scrolling up out of view
            if (!isScrollingDown && entry.boundingClientRect.top < 0) {
                entry.target.classList.remove('animate-in');
                entry.target.classList.add('animate-out');
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

sections.forEach(section => {
    observer.observe(section);
});
});
