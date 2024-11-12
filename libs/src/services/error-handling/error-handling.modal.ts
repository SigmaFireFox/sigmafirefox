export enum FirebaseError {
  InvalidEmail = 'Firebase: Error (auth/invalid-email).',
  EmailInUse = 'Firebase: Error (auth/email-already-in-use).',
  MissingPassword = 'Firebase: Error (auth/missing-password).',
  WeakPassword = 'Firebase: Password should be at least 6 characters (auth/weak-password).',
  InvalidCredential = 'Firebase: Error (auth/invalid-credential).'
}
