import { getFirestore } from "firebase/firestore";
import { app } from "../config/firebase";

// Firebase things
export const db = getFirestore(app);
