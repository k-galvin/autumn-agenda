// This service completely hides the data store from the rest of the app.

import { db } from '../firebaseConfig'
import { collection, query, getDocs, addDoc, deleteDoc, doc, orderBy, limit, Timestamp } from 'firebase/firestore'

export async function createArticle({ title, body, category }) {
  const data = { title, body, date: Timestamp.now(), category }
  const docRef = await addDoc(collection(db, 'articles'), data)
  return { id: docRef.id, ...data }
}

export async function removeArticle(id) {
  const articleRef = doc(db, 'articles', id)
  await deleteDoc(articleRef)
}

// NOT FINISHED: This only gets the first 20 articles. In a real app,
// you implement pagination.
export async function fetchArticles() {
  const snapshot = await getDocs(query(collection(db, 'articles'), orderBy('date', 'desc'), limit(20)))
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}
