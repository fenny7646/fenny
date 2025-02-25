import { data } from './firebase.js'   
   // Function to generate HTML for all maincards
function generateHtml(data) {
     let html = '';
   
     // Get the keys of data.maincards and sort them
     const sortedKeys = Object.keys(data.maincards).sort();
   
     // Iterate over the sorted keys
     for (const key of sortedKeys) {
       const value = data.maincards[key];
       html += `
         <div class="card">
          <header>
            <h1 class="fcolor">${value.name1}</h1>
            <h2 class="fcolor">${value.name2}</h2>
          </header>
          ${value.sub_entry.map(entry => `
            <main>
              <div class="titleheader">
                <h3 class="fcolor">${entry.title}</h3>
              </div>
              <div class="itemcontainer">
                ${entry.items.map(item => `
                <item>
                <ion-icon name="caret-forward-outline"></ion-icon>
                <marker class="fcolor">${item}</marker>
                </item>
                `).join('')}
              </div>
            </main>
            `).join('')}
        </div>
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
       const modalCardsDiv = document.getElementById('modalCards');
       modalCardsDiv.innerHTML = html;
     } catch (error) {
       console.error('Error:', error);
     }
   }
     
     // Call the function to display data
displayData();