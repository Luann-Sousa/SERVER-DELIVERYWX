interface UserAuth {
  username?: string;
  email: string;
  password: string;
}
class ServiceAuthentication {
  async execute({ username, email, password }: UserAuth) {}
}

export { ServiceAuthentication };
