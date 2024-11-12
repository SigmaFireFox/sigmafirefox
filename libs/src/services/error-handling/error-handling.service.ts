import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FirebaseError } from './error-handling.modal';
import { ErrorModalConfig } from './error-modal.model';
import {
  ErrorFirebaseEmailInUse,
  ErrorFirebaseGeneral,
  ErrorFirebaseInvalidEmail,
  ErrorFirebaseMissingPassword,
  ErrorFirebaseWeakPassword,
  ErrorGeneral,
} from './error-handling.const';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  errorModalConfig = new Subject<ErrorModalConfig>();

  handleError(error: Error): void {
    if (error.name === 'FirebaseError') {
      switch (error.message as FirebaseError) {
        case FirebaseError.InvalidEmail: {
          return this.errorModalConfig.next(ErrorFirebaseInvalidEmail);
        }
        case FirebaseError.EmailInUse: {
          return this.errorModalConfig.next(ErrorFirebaseEmailInUse);
        }
        case FirebaseError.MissingPassword: {
          return this.errorModalConfig.next(ErrorFirebaseMissingPassword);
        }
        case FirebaseError.WeakPassword: {
          return this.errorModalConfig.next(ErrorFirebaseWeakPassword);
        }
        default: {
          return this.errorModalConfig.next(ErrorFirebaseGeneral);
        }
      }
    } else {
      return this.errorModalConfig.next(ErrorGeneral);
    }
  }
}
