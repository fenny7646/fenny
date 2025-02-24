// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase configuration (replace with your Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyACp0-ANsu-TKxsvNCsEqX9LsFK253IBiM",
  authDomain: "portfolio-7646.firebaseapp.com",
  databaseURL: "https://portfolio-7646-default-rtdb.firebaseio.com",
  projectId: "portfolio-7646",
  storageBucket: "portfolio-7646.firebasestorage.app",
  messagingSenderId: "721827608324",
  appId: "1:721827608324:web:6aeb0b2de1843f1b79c251",
  measurementId: "G-T8QWBEKZTN"
};

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