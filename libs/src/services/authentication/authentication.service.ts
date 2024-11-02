import { Inject, Injectable } from '@angular/core';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  Auth,
  getAuth,
  OAuthCredential,
  UserCredential,
  getAdditionalUserInfo,
  AdditionalUserInfo,
  User
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // Configs we need to start this service
  app: FirebaseApp;
  auth: Auth;

  // Auth details we may require
  user: User | undefined
  accessToken: string | undefined
  idToken: string | undefined 
  
  constructor(
    @Inject('firebaseConfig') public firebaseConfig: FirebaseOptions
  ) {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
  }

  
  registerWithEmail(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) => {
        this.user = userCredential.user;
        resolve()
      })
      .catch((error) => {
        reject(error)
      });
    })

  }

  signInWithEmail(email: string, password: string) : Promise<void> {
    return new Promise ((resolve, reject ) => {
      signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) => {
        this.user = userCredential.user;
        resolve()
      })
      .catch((error) => {
        reject(error)
      });
    })

  }

  getSignInUser() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }

  getSignedInUserProfile(){
    const user = this.auth.currentUser;

    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      console.log(displayName, email, photoURL, emailVerified, uid)
    }
  }

  signOut() {
    signOut(this.auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  signInWithGoogle(): Promise<void> {
    return new Promise((resolve, reject) => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(this.auth, provider)
        .then((userCredential: UserCredential) => {
          // Get the OAuthCredentials from the UserCredentials
          const OAuthCredential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(userCredential);
          const additionalUserInfo: AdditionalUserInfo | null = getAdditionalUserInfo(userCredential);
          if (!OAuthCredential || !additionalUserInfo) return;
  
          // If we have all the required credentials lets extract what we are likely to need
          this.user = userCredential.user;
          this.accessToken  = OAuthCredential.accessToken;
          this.idToken = OAuthCredential.idToken;

          resolve()
        })
        .catch((error) => {
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          if (!credential) return;
          // ...

          reject()
        });
    })

  }

  signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        if (!credential) return;
        // const accessToken = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        if (!credential) return;
        // ...
      });
  }

  resetPassword(email: string){
    sendPasswordResetEmail(this.auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(error);
    // ..
  });
  }
}
