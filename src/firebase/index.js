import app from 'firebase/app';
import 'firebase/auth';
import FirebaseContext from './context';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  createUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  loginWithEmailAndPassword = (email, pass) => this.auth.signInWithEmailAndPassword(email, pass);

  signOut = () => this.auth.signOut();
}

export { Firebase, FirebaseContext };
