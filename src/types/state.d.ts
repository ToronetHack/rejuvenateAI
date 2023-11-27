export interface IAddressToken {
  Link: string;
  Usdt: string;
  Dai: string;
  address: string;
}

export interface IAddressData {
  address: string;
}

export type stateContextType = {
  address: string;
  allTokensData: any;
  loading: boolean;
  setAllTokenData: (data: any) => void;
  setAddress: (data: string) => void;
  setLoading: (data: boolean) => void;
};
export type Community = {
  name: string;
  description: string;
  cover: string;
  membersCount: number;
  id: number;
  slug: string;
  members: object[];
};