export interface User {
  name: string;
  mail: string;
  active: boolean;
  role: 'user' | 'editor' | 'admin';
}