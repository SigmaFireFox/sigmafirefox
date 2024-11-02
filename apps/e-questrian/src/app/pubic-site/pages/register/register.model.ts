export enum ThirdPartyAuthProviders {
  Google = 'google',
  Facebook = 'facebook'
}

export enum AlternativeActions {
  SignIn = 'sign-in',
}

export interface RegisterForm {
  email: string
  password: string
}