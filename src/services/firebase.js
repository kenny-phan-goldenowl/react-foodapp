// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/* eslint-disable */
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth';
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore';
/* eslint-enable */
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey           : 'AIzaSyB-B06Fp_OLp4HuR6yarYpMg8jXTfV5STY',
  authDomain       : 'foodapp-4d4f5.firebaseapp.com',
  projectId        : 'foodapp-4d4f5',
  storageBucket    : 'foodapp-4d4f5.appspot.com',
  messagingSenderId: '920120821378',
  appId            : '1:920120821378:web:16c9332117562beaeb569b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign in uisng email & password
export const signInMail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

// Google sign in method
// Bug currently -> check later----------------------------------------------------------------------------
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '===', user.id));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid         : user.uid,
        name        : user.displayName,
        authProvider: 'google',
        email       : user.email,
        password    : user.password,
      });
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

// Sign up using email & password
export const signUpMail = async (name, email, password, phone = '') => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid         : user.uid,
      name,
      authProvider: 'local',
      email,
      password,
      phone       : phone,
      dob         : '',
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export const logout = () => {
  signOut(auth);
};
