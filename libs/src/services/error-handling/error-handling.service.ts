import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FirebaseError } from './error-handling.modal';
import { ErrorModalConfig } from './error-modal.model';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  errorModalConfig = new Subject<ErrorModalConfig>();

  handleError(error: Error): void {
    if (error.name === 'FirebaseError') {
      switch (error.message as FirebaseError) {
        case FirebaseError.InvalidEmail: {
          this.errorModalConfig.next({
            heading: 'Invalid email',
            content: [
              'It seems our Authentication service considers \
              the email address you provided as invalid',
              'Please check that the email address you have \
              entered is correct',
              'If you are certain the address is correct then \
              please reach out to us via out Contact us form',
            ],
          });
          return;
        }
        default: {
          this.errorModalConfig.next({
            heading: 'Firebase error',
            content: [
              'It seems Firebase has returned an unspecific \
              error',
              'Please retrying submitting the form again',
              'If this issue persists please reach out to us \
              via out Contact us form'
            ],
          });
          return;
        }
      }
    }
    console.log('This is a General error');
  }
}
