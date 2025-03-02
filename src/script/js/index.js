


// Firebase
async function fetchData() {
  try {
    // Reference to the Firestore collection
    const collectionRef = collection(db, 'portfolio'); // Replace 'portfolio' with your collection name

    // Fetch documents from the collection
    const snapshot = await getDocs(collectionRef);
    const data = [];
    snapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() }); // Include document ID and data
    });
    console.log(data);
    // Return the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
  }
}
//ModalData
async function modelData() {
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

//Label Data
async function badgeData() {
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

//Project Data
async function proData() {
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