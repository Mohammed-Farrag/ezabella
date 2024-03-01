import {firebase_app} from "./firebase";
import { getFirestore, doc, getDocs,  getDoc , collection } from "firebase/firestore";


const db = getFirestore(firebase_app);
async function getData(coll) {
    
    let result = null;
    let error = null;

    try {
        result = await getDocs(collection(db, coll))

    } catch (e) {
        error = e;
    }

  return {result, error}
}

export default getData