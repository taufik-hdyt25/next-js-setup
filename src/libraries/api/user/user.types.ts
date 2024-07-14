export interface IParamAddress {
  label: string;
  name: string;
  phone: string;
  address: string;
  address_id: string;
  note: string;
  longitude: number;
  latitude: number;
  id?: string;
  location?: ILocation;
  email?: string;
}

export interface IParamGetAddress {
  page: number;
  length: number;
  search: string;
}

export interface IAddressAutoComplete {
  city: string;
  code: string;
  district: string;
  id: string;
  postcode: string;
  province: string;
  sub_district: string;
}

export interface IParamGetAutoCompleteAddress {
  search?: string;
  limit?: number;
}

export interface ILocation {
  id: string;
  code: string;
  province: string;
  city: string;
  district: string;
  sub_district: string;
  postcode: string;
}

export interface IAddress {
  id: string;
  label: string;
  name: string;
  phone: string;
  address: string;
  location: ILocation;
  note: string;
  main: boolean;
  longitude: number;
  latitude: number;
  email?: string;
}
