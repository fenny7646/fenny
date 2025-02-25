import { data } from './firebase.js'   
   // Function to generate HTML for all maincards
function generateHtml(data) {
     let html = '';
   
     // Get the keys of data.maincards and sort them
     const sortedKeys = Object.keys(data.procards).sort();
   
     // Iterate over the sorted keys
     for (const key of sortedKeys) {
       const value = data.procards[key];
       html += `
        <div class="procard">
          <header>
            <h1>${value.name}</h1>
            <h2>${value.date}</h2>
          </header>
            <main>
              <div class="titleheader">
                <h3>Description</h3>
              </div>
              <div class="desccontainer">
                <h4>${value.desc}</h4>
              </div>
              <div class="proitemcontainer">
                ${(value.dots).map(dot => `
                <item>${dot}</item>
                    `).join('')}
              </div>
            </main>
            <linkcontainer>
                ${(value.links).map(linker => `
                <linker>
                <a href="${linker.link}">${linker.name}</a>
                </linker>
                `).join('')}
            <linkcontainer>
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
       const modalCardsDiv = document.getElementById('proCards');
       modalCardsDiv.innerHTML = html;
     } catch (error) {
       console.error('Error:', error);
     }
   }
     
     // Call the function to display data
displayData();