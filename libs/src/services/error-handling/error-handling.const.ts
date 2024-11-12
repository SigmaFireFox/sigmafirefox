import { ErrorModalConfig } from "./error-modal.model";

export const ErrorFirebaseInvalidEmail: ErrorModalConfig = {
  heading: 'Invalid email',
  content: [
    'The format of the email you have provided seems \
    to be invalid',
    'Please check that the email address you have \
    entered is correct',
    'If you are certain the address is correct, please \
    reach out to us via our "Contact us" form',
  ],
}

export const ErrorFirebaseEmailInUse: ErrorModalConfig = {
  heading: 'Email already registered',
  content: [
    'It seems the email you entered has already been \
    used to register for an account',
    'Please go to our "Sign in" page and sign in with \
    email address provided',
    'If you are unable to remember your password in order \
    to sign in, then please click the "Forgot Password" \
    button on the "Sign in" page to reset your password',
  ],
}

export const ErrorFirebaseMissingPassword: ErrorModalConfig = {
  heading: 'Missing password',
  content: [
    'It seems you have omitted a password, which is \
    required in order to register',
    'Please provide a password before trying to resubmit \
    the registration form'
  ],
}

export const ErrorFirebaseWeakPassword: ErrorModalConfig = {
  heading: 'Weak Password',
  content: [
    'It seems the password is not sufficiently strong \
    enough to register with',
    'Please provide an alternative password, which is \
    to be no less then 6 characters long ',
  ],
}

export const ErrorFirebaseGeneral: ErrorModalConfig = {
  heading: 'Firebase error',
  content: [
    'It seems Firebase has returned an unspecified \
    error',
    'Please retrying submitting the form again',
    'If this issue persists please reach out to us \
    via our "Contact us" form'
  ],
}

export const ErrorGeneral: ErrorModalConfig = {
  heading: 'General error',
  content: [
    'An unspecified error has been provide with no \
    additional context',
    'Please retrying submitting the form again',
    'If this issue persists please reach out to us \
    via out Contact us form'
  ],
}