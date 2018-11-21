export class UserLogin {
  constructor(email?: string, password?: string, domain?:string, rememberMe?: boolean) {
    this.email = email;
    this.password = password;
    this.domain = domain;
    this.rememberMe = rememberMe;
  }

  email: string;
  password: string;
  domain: string;
  rememberMe: boolean;
}
