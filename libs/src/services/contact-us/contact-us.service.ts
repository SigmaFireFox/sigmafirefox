import { Injectable } from '@angular/core';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { ContactUsForm } from './contact-us.model';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  firebaseConfig = {};
  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);

  async postContactUsForm(form: ContactUsForm) {
    const today = new Date();
    const collectionRef = 'contact-us'
    const docRef = `${today.getFullYear}-${today.getMonth}-${today.getDate}-${today.getTime}`;
    await setDoc(doc(this.db, collectionRef, docRef), form);
  }
}
