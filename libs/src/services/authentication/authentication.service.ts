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
  User,
  UserProfile,
} from 'firebase/auth';
import { ErrorHandlingService } from '../error-handling/error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // Configs we need to start this service
  app: FirebaseApp;
  auth: Auth;

  // Auth details we may require
  user: User | undefined;
  userProfile: UserProfile | undefined;
  accessToken: string | undefined;
  idToken: string | undefined;

   get isUserSignedIn(): Promise<boolean> {
    return this.getSignInUser()
  }

  constructor(
    @Inject('firebaseConfig') public firebaseConfig: FirebaseOptions,
    private errorHandling: ErrorHandlingService
  ) {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.getSignInUser();
    this.getSignedInUserProfile();
  }

  // ****************************************************************
  // Public Register Methods
  // ****************************************************************

  registerWithEmail(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential: UserCredential) => {
          this.user = userCredential.user;
          resolve();
        })
        .catch((error) => reject(this.errorHandling.handleError(error)));
    });
  }

  // ****************************************************************
  // Public Sign In Methods
  // ****************************************************************

  signInWithEmail(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential: UserCredential) => {
          this.user = userCredential.user;
          resolve();
        })
        .catch((error) => reject(this.errorHandling.handleError(error)));
    });
  }

  signInWithGoogle(): Promise<void> {
    return new Promise((resolve, reject) => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(this.auth, provider)
        .then((userCredential: UserCredential) => {
          // Get the OAuthCredentials from the UserCredentials
          const OAuthCredential: OAuthCredential | null =
            GoogleAuthProvider.credentialFromResult(userCredential);
          const additionalUserInfo: AdditionalUserInfo | null =
            getAdditionalUserInfo(userCredential);
          if (!OAuthCredential || !additionalUserInfo) return;

          // If we have all the required credentials lets extract
          // what we are likely to need
          this.user = userCredential.user;
          this.accessToken = OAuthCredential.accessToken;
          this.idToken = OAuthCredential.idToken;

          resolve();
        })
        .catch((error) => {
          const OAuthCredential: OAuthCredential | null =
            GoogleAuthProvider.credentialFromError(error);
          if (!OAuthCredential) return;
          this.accessToken = OAuthCredential.accessToken;
          this.idToken = OAuthCredential.idToken;
          reject(error);
        });
    });
  }

  signInWithFacebook(): Promise<void> {
    return new Promise((resolve, reject) => {
      const provider = new FacebookAuthProvider();
      signInWithPopup(this.auth, provider)
        .then((userCredential: UserCredential) => {
          // Get the OAuthCredentials from the UserCredentials
          const OAuthCredential: OAuthCredential | null =
            FacebookAuthProvider.credentialFromResult(userCredential);
          const additionalUserInfo: AdditionalUserInfo | null =
            getAdditionalUserInfo(userCredential);
          if (!OAuthCredential || !additionalUserInfo) return;

          // If we have all the required credentials lets extract
          // what we are likely to need
          this.user = userCredential.user;
          this.accessToken = OAuthCredential.accessToken;
          this.idToken = OAuthCredential.idToken;

          resolve();
        })
        .catch((error) => {
          const OAuthCredential: OAuthCredential | null =
            FacebookAuthProvider.credentialFromError(error);
          if (!OAuthCredential) return;
          this.accessToken = OAuthCredential.accessToken;
          this.idToken = OAuthCredential.idToken;
          reject(error);
        });
    });
  }

  // ****************************************************************
  // Public Sign Out and Reset Password Methods
  // ****************************************************************

  signOut(): Promise<void> {
    return new Promise((resolve, reject) => {
      signOut(this.auth)
      .then(() => resolve())
      .catch((error) => {
        reject()
        console.log(error);
      });
    })

  }

  resetPassword(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      sendPasswordResetEmail(this.auth, email)
        .then(() => resolve())
        .catch((error) => reject(this.errorHandling.handleError(error)));
    });
  }

  // ****************************************************************
  // Private Methods
  // ****************************************************************

  private getSignInUser(): Promise<boolean> {
    return new Promise((resolve) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          this.user = user;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  private getSignedInUserProfile(): void {
    const user = this.auth.currentUser;
    if (user !== null) {
      this.userProfile = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        uid: user.uid,
      };
    }
  }
}
