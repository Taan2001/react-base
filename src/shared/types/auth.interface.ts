export interface IAuthStore {
  userName: string | null;
  role: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  tempSession: string | null;
  setAuthStore: (data: Partial<Omit<IAuthStore, 'setAuthStore' | 'clearAuthStore'>>) => void;
  clearAuthStore: () => void;
}

export interface ITest {
  
}