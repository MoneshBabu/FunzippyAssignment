// Select the buttons for registration
const registerButtons = document.querySelectorAll('.register, .Expo');

// Add click event listener to all registration buttons
registerButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Simulate form submission or redirect to registration page
    alert('You have clicked the registration button!');
  });
});

// Select the video play button (if it exists)
const playVideoButton = document.querySelector('.about button');

// Add click event listener to play video button
if (playVideoButton) {
  playVideoButton.addEventListener('click', () => {
    // Simulate video play functionality or open video in a new tab
    alert('You have clicked the play video button!');
  });
}

// Improve accessibility: Add functionality for expanding/collapsing FAQs

const faqQuestions = document.querySelectorAll('.faq dt');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('show-answer'); // Add/remove class for styling
  });
});
