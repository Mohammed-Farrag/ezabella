import {firebase_app} from "./firebase";
import { getFirestore,  setDoc, doc, addDoc } from 'firebase/firestore'


const db = getFirestore(firebase_app);


async function  addData(collection, id, data) {
    let result = null;
    let error = null;
    const dbInstance = collection(db, 'reviews');

    try {
        result = await addDoc(doc(db, collection, id), data, {merge: true})
    } catch (e) {
        error = e;
    }
  return {result, error};
}

export default  addData