export interface IUser {
  first_name?: string | null;
  last_name?: string | null;
  mobile?: string;
}

export interface IAuthenticationSliceState {
  user: IUser | null;
  accessToken: string | null;
}
