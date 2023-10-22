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

export async function fetchArticlesByCategory(category) {
  const snapshot = await getDocs(query(collection(db, 'articles'), orderBy('date', 'desc')))

  const articles = snapshot.docs
    .filter(doc => category === 'all' || doc.data().category === category)
    .map(doc => ({ id: doc.id, ...doc.data() }))

  return articles
}

export async function fetchArticleByIndex(category, index) {
  const articles = await fetchArticlesByCategory(category)
  if (index >= 0 && index < articles.length) {
    return articles[index]
  } else {
    return null
  }
}
