import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  handleError(error: unknown):void{
    console.log(error)
  }
}

// FirebaseError: Firebase: Error (auth/invalid-email)