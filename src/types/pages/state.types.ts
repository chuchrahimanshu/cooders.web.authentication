export interface SignUpState {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface SignInState {
  username: string;
  password: string;
}

export interface ChangePasswordState {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface AuthenticateState {
  email: string;
}

export interface EmailVerificationState {
  email: string;
  otp: string;
}
