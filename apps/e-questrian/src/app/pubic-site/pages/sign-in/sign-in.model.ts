export enum ThirdPartyAuthProviders {
  Google = 'google',
  Facebook = 'facebook'
}

export enum AlternativeActions {
  Register = 'register',
  ForgotPassword = 'forgot-password'
}

export interface SignInForm {
  email: string
  password: string
}