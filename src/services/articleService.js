// This service completely hides the data store from the rest of the app.

import { db } from '../firebaseConfig'
import { collection, query, getDocs, addDoc, deleteDoc, doc, orderBy, Timestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// Create article in firebase
export async function createArticle({ title, body, category, imageUrl }) {
  try {
    const data = { title, body, date: Timestamp.now(), category, imageUrl }
    const docRef = await addDoc(collection(db, 'articles'), data)
    return { id: docRef.id, ...data }
  } catch (error) {
    throw error
  }
}

// Remove article from firebase
export async function removeArticle(id) {
  try {
    const articleRef = doc(db, 'articles', id)
    await deleteDoc(articleRef)
  } catch (error) {
    throw error
  }
}

// Fetch articles from firebase
export async function fetchAllArticles() {
  try {
    const snapshot = await getDocs(query(collection(db, 'articles'), orderBy('date', 'desc')))
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (error) {
    throw error
  }
}

// Filter articles to those in the given category
export async function filterArticlesByCategory(articles, category) {
  try {
    if (category !== 'all') {
      articles = articles.filter(a => a.category === category)
    }
  } catch (error) {
    throw error
  }
}

// Upload the given image to firebase and get its download url
export async function uploadImageToStorage(file) {
  if (file) {
    try {
      const storage = getStorage()
      const storageRef = ref(storage, 'images/' + file.name)
      await uploadBytes(storageRef, file)
      return getDownloadURL(storageRef)
    } catch (error) {
      throw error
    }
  }
  return null
}
