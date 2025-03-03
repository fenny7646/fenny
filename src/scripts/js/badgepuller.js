function generateHtml(data) {
     let html = '';
     // Get the keys of data.maincards and sort them
     const sortedKeys = Object.keys(data.mainbadge).sort();
     // Iterate over the sorted keys
     for (const key of sortedKeys) {
       const values = data.mainbadge[key];
       html += `
        <a href="${values.badge_link}" class="headercontainerlabel-container">
          <ion-icon name="${values.badge_icon}" class="headercontainerlabel-items"></ion-icon>
        </a>
        `;
     }
     return html;
   }
   // Function to display fetched data in the #modalCards div

   export { generateHtml };