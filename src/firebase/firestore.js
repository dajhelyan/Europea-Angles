import { Firestore } from "./firebase";


const getCollection = (collectionName) => {
  const itemCollection = Firestore().collection(collectionName);
  return itemCollection.get();
}

const getItemsCategory = (collectionName, category, id) => {
  const itemCollection = Firestore().collection(collectionName).where(category, "==", id)
  return itemCollection.get();
}

const getDoc = (collectionName, id) => {
  const doc = Firestore().collection(collectionName).doc(id)
  return doc.get();
}

export {
  getCollection,
  getItemsCategory,
  getDoc
}