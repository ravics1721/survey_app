import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQQlKqduuTntwpypM6v7VvaQtND-PogOM",
  authDomain: "survey-app-3fae3.firebaseapp.com",
  projectId: "survey-app-3fae3",
  storageBucket: "survey-app-3fae3.appspot.com",
  messagingSenderId: "917862402685",
  appId: "1:917862402685:web:0108482d977f0c21703f14",
  measurementId: "G-5GXKGL8KWH",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const logout = auth.signOut();

/**
 *
 * @param {Object} doc - documnet
 * @param {String} uid - user id
 * @returns Document
 */

export const addSurveyDocument = async (doc, uid) => {
  if (!doc) return;
  const surveyRef = firestore.doc(`survey/${uid}`);
  const snapshot = await surveyRef.get();
  if (!snapshot.exists) {
    try {
      await surveyRef.set(doc);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  }
  return getSurveyDocument(uid);
};

/**
 *
 * @param {String} uid - user id
 * @returns Document
 */
export const getSurveyDocument = async (uid) => {
  if (!uid) return null;
  try {
    const surveyDocument = await firestore.collection("survey").doc(uid).get();
    return { uid, ...surveyDocument };
  } catch (error) {
    console.error("error fetching user ", error.message);
  }
};
