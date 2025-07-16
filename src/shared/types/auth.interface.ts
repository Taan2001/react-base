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
  test: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
  test7: string;
  test8: string;
  test9: string;
  test10: string;
}
