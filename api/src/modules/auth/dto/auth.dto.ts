export type SignInDto = {
  email: string;
  password: string;
};

export type SignUpDto = {
  name: string;
  email: string;
  password: string;
};

export type UserCreatedDTO = {
  id: string;
  name: string;
  email: string;
  password: string;
  atavarUrl?: string;
  createdAt: Date;
  role: 'ADMIN' | 'FINANCE' | 'SECRETARY' | 'USER';
};

export type UserProfileDTO = {
  id: string;
  name: string;
  email: string;
  atavarUrl?: string;
  role: 'ADMIN' | 'FINANCE' | 'SECRETARY' | 'USER';
};
