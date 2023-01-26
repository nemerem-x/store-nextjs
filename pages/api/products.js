import { collection, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../components/firebase";

export default async function products(req, res) {

    if(req.method === 'GET') {
        const docRef = doc(db, "products", "shirts")
        const docSnap = await getDoc(docRef)
    
        if (docSnap.exists()) {
            res.status(200).json(docSnap.data())
          } else {
            console.log("No such document!");
            res.status(204).json({status: "empty"})
          }
    }

    if(req.method === 'POST') {
        await setDoc(doc(db, "products", "shirts"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        })
    }
}
