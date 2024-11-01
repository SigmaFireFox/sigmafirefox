import { Inject, Injectable } from '@angular/core';
import { doc, Firestore, getFirestore, setDoc } from 'firebase/firestore';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { ContactUsForm } from './contact-us.model';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  app: FirebaseApp;
  db: Firestore;

  constructor(
    @Inject('firebaseConfig') public firebaseConfig: FirebaseOptions
  ) {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async postContactUsForm(form: ContactUsForm) {
    const today = new Date();
    const collectionRef = 'contact-us';
    const docRef = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}-${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}`;
    await setDoc(doc(this.db, collectionRef, docRef), form)
      .catch((error) => {
        console.log(error);
      });
  }
}
