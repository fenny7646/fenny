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
                <h3 class="fcolor">Description</h3>
              </div>
              <div class="desccontainer">
                <h4 class="fcolor">${value.desc}</h4>
              </div>
              <div class="proitemcontainer">
                ${(value.dots).map(dot => `
                <div class="item">
                <ion-icon name="caret-forward-outline"></ion-icon>
                <marker>${dot}</marker>
                </div>
                    `).join('')}
              </div>
            </main>
            <div class="linkcontainer">
                ${(value.links).map(linker => `
                  <div class="linker"><a class="fcolor" href="${linker.link}">${linker.name}</a></div>
                `).join('')}
            </div>
        </div>
       `;
     }
   
     return html;
   }
   // Function to display fetched data in the #modalCards div
     
     // Call the function to display data
displayData();