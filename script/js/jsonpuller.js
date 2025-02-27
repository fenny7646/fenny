import { data } from './firebase.js'   
   // Function to generate HTML for all maincards
function generateHtml(data) {
   
     // Get the keys of data.maincards and sort them
     const sortedKeys = Object.keys(data).sort();

     // Iterate over the sorted keys
   
     return sortedKeys;
   }
   // Function to display fetched data in the #modalCards div
async function displayData() {
     try {
       // Generate HTML for the first item in the data array
       const html = generateHtml(data[0]);
       // Insert the generated HTML into the #modalCards div
       const modalCardsDiv = document.getElementById('jsonpush');
       modalCardsDiv.innerHTML = html;
     } catch (error) {
       console.error('Error:', error);
     }
   }
     
     // Call the function to display data
displayData();