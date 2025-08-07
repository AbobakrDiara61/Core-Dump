document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    // Get the modal container
    const authContainer = document.querySelector('.auth-container');
    // Get the modal elements
    const loginModal = document.getElementById('auth-login');
    const signupModal = document.getElementById('auth-sign-up');
    
    // Get the button elements
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('sign-up-btn');
    
    // Get close buttons
    const closeButtons = document.querySelectorAll('.close');
    
    // Function to show login modal and hide others
    function showLoginModal() {
        body.classList.add('modal-open');
        authContainer.classList.add('active');
        signupModal.classList.remove('active');
        loginModal.classList.add('active');
    }
    
    // Function to show signup modal and hide others
    function showSignupModal() {
        body.classList.add('modal-open');
        authContainer.classList.add('active');
        loginModal.classList.remove('active');
        signupModal.classList.add('active');
    }
    
    // Function to close all modals
    function closeModals() {
        body.classList.remove('modal-open');
        authContainer.classList.remove('active');
        loginModal.classList.remove('active');
        signupModal.classList.remove('active');
    }
    
    // Event listeners for buttons
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginModal();
        });
    }
    
    if (signupBtn) {
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSignupModal();
        });
    }
    
    // Event listeners for close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModals);
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            closeModals();
        }
        if (e.target === signupModal) {
            closeModals();
        }
    });
});