// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDHZMQPxEah3O9ovW-Y9bHPU_ISsv0uxc',
  authDomain: 'fir-backed-k-galvin.firebaseapp.com',
  projectId: 'fir-backed-k-galvin',
  storageBucket: 'fir-backed-k-galvin.appspot.com',
  messagingSenderId: '681235361198',
  appId: '1:681235361198:web:8fd12eabb98d83cb582c3f'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
