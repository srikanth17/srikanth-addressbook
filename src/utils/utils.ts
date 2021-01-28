const API_KEY = 'KwKyxfcl8E-xck4E2htmnA29997';
export const regex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/;

export const fetchAddress = async (postcode: string) => {
  const response = await fetch(
    `https://api.getAddress.io/find/${postcode}?api-key=${API_KEY}`
  );

  return response;
};

export const fetchCountries = async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');

  return response;
};
