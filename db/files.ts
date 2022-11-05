import { getStorage } from "firebase/storage";
import { app } from "../config/firebase";


// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
