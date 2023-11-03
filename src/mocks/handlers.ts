import { http, HttpResponse } from "msw";
import mockCharacters from "./mockData";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/characters`, () => {
    return HttpResponse.json(mockCharacters);
  }),
];
