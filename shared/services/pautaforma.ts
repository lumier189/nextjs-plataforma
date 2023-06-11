import axios from 'axios';

export const pautaformaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PAUTAFORMA_BASE_URL
});
