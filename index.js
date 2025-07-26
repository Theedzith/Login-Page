
        // Tab switching functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        const formTitle = document.querySelector('.form-title');
        const signInButton = document.querySelector('.signin-button');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const isSignIn = button.textContent === 'Sign In';
                formTitle.textContent = isSignIn ? 'Sign In' : 'Sign Up';
                signInButton.textContent = isSignIn ? 'Sign In →' : 'Sign Up →';
            });
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! (This is just a demo)');
        });
