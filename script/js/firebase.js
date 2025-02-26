// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase configuration (replace with your Firebase project config)
const firebaseConfig = process.env.FIREBASE_AUTH;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to fetch data from Firestore and log it to the console
async function fetchData() {
  try {
    // Reference to the Firestore collection
    const collectionRef = collection(db, 'portfolio'); // Replace 'users' with your collection name

    // Fetch documents from the collection
    const snapshot = await getDocs(collectionRef,'portfolio');
    const data = [];
    snapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() }); // Include document ID and data
    });
    console.log(data)
    // Return the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
  }
}
export const data = await fetchData()