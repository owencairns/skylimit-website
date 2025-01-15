import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import { firebaseConfig } from "../firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export const firebaseFunctions = {
  updatePackage: httpsCallable(functions, "updatePackage"),
  deletePackage: httpsCallable(functions, "deletePackage"),
  updateVideo: httpsCallable(functions, "updateVideo"),
  updateImage: httpsCallable(functions, "updateImage"),
};
