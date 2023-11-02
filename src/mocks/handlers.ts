import { http, HttpResponse } from "msw";
import apiCharacters from "../data/apiData";

const urlApi = "url";

export const handlers = [
  http.get(urlApi, () => {
    return HttpResponse.json(apiCharacters);
  }),
];
