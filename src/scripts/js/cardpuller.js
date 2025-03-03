// Function to generate HTML for all maincards
function generatestackHtml(data) {
     let html = '';
     // Get the keys of data.maincards and sort them
     const sortedKeys = Object.keys(data.maincards).sort();
     // Iterate over the sorted keys
     for (const key of sortedKeys) {
       const value = data.maincards[key];
       html += `
         <div class="card">
          <header>
            <h1>${value.name1}</h1>
            <h2>${value.name2}</h2>
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
                <marker>${item}</marker>
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
    

export { generatestackHtml };