document.addEventListener('DOMContentLoaded', () => {
    // Handle email form submissions
    const emailForms = document.querySelectorAll('form');
    emailForms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            if (validateEmail(email)) {
                alert('Thank you! We will process your email: ' + email);
                emailInput.value = ''; // Clear input
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            // Hide all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            // Toggle current answer
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Language selector (placeholder functionality)
    const languageSelector = document.querySelector('select');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            console.log('Language changed to: ' + e.target.value);
            // In a real app, this would trigger a page reload or content update
        });
    }
});