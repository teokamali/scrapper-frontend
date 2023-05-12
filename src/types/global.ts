export interface IAuthenticationToken {
  access_token: string;
  refresh_token: string;
}
export interface ITokenData {
  expires: string;
  token: string;
}

export interface IAttributes {
  _id: string;
  title: string;
  value: string;
}

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  attributes: IAttributes[] | [];
  companyId: string;
}
