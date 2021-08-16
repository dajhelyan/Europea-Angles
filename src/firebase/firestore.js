import { Firestore } from "./firebase";


const getCollection = (collectionName) => {
  const itemCollection = Firestore().collection(collectionName);
  return itemCollection.get();
}

const getItemsCategory = (collectionName, category, id) => {
  const itemCollection = Firestore().collection(collectionName).where(category, "==", id)
  return itemCollection.get();
}

export   {
  getCollection,
  getItemsCategory
}