import { data } from './firebase.js'   
   // Function to generate HTML for all maincards
function generateHtml(data) {
     let html = '';
   
     // Get the keys of data.maincards and sort them
     const sortedKeys = Object.keys(data.mainbadge).sort();
   
     // Iterate over the sorted keys
     for (const key of sortedKeys) {
       const values = data.mainbadge[key];
       html += `
        <a href="${values.badge_link}" class="">
          <ion-icon name="${values.badge_icon}" class=""></ion-icon>
        </a>
        `;
     }
     return html;
   }
   // Function to display fetched data in the #modalCards div
async function displayData() {
     try {
       // Generate HTML for the first item in the data array
       const html = generateHtml(data[0]);
       // Insert the generated HTML into the #modalCards div
       const modalCardsDiv = document.getElementById('badgeCards');
       modalCardsDiv.innerHTML = html;
     } catch (error) {
       console.error('Error:', error);
     }
   }
     
     // Call the function to display data
displayData();