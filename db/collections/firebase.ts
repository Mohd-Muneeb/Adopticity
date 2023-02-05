import { getFirestore } from "firebase/firestore";
import { app } from "../../config/firebase";
import { doc, setDoc, addDoc } from "firebase/firestore";

// Firebase things
export const db = getFirestore(app);

const uploadProduct = () => {};

const uploadUsers = async (data: any) => {
    const payload = {
        ...data,
        active: true,
    }
	await setDoc(doc(db, "users", "new-city-id"), data);
};
