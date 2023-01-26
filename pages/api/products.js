import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../components/firebase";

export default async function products(req, res) {

    const docRef = doc(db, "products", "shirts")
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        res.status(200).json(docSnap.data())
      } else {
        console.log("No such document!");
        res.status(400).json({status: "empty"})
      }

}
