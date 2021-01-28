export interface AddressesResponse {
  addresses: string[];
  latitude: number;
  longitude: number;
}

export interface Address {
  line1: string;
  line2: string;
  line3: string;
  postcode: string;
  town: string;
  country: string;
}
