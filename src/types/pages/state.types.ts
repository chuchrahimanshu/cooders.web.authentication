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
