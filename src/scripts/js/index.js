// Import Firebase modules
import { data } from "./firebase.js";
import '../../style/css/style.css'; // Import the main CSS file

// Import generateHtml functions from each file
import { generateHtml as generateBadgeHtml } from './badgepuller.js';
import { generatestackHtml as generateCardHtml } from './cardpuller.js';
import { generateproHtml as generateProCardHtml } from './procardpuller.js';

// Function to display main card data
async function displayCardData() {
  try {
    // Generate HTML for main cards
    const cardData = data[0];
    // Insert the generated HTML into the #modalCards div
    const modalCardsDiv = document.getElementById('modalCards');
    const badgeCardsDiv = document.getElementById('badgeCards');
    const proCardsDiv = document.getElementById('proCards');
    console.log(modalCardsDiv, badgeCardsDiv, proCardsDiv);
    if (badgeCardsDiv && modalCardsDiv ) {
      badgeCardsDiv.innerHTML = generateBadgeHtml(cardData);
      modalCardsDiv.innerHTML = generateCardHtml(cardData);
    }
    if (badgeCardsDiv && proCardsDiv) {
      badgeCardsDiv.innerHTML = generateBadgeHtml(cardData);
      proCardsDiv.innerHTML = generateProCardHtml(cardData);
    }
  } catch (error) {
    console.error('Error displaying card data:', error);
  }
}

// Call the initializeApp function to start the ap
function initializeApp() {
  try {
    displayCardData();
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Call the initializeApp function to start the app
 initializeApp();