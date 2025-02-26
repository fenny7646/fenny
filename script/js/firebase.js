// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration (replace with your Firebase project config)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to fetch data from Firestore and log it to the console
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
export const data = await fetchData();