import axios from "axios";

import { configs } from "../configs";

const authParams = {
  consumer_key: configs.CONSUMER_KEY,
  consumer_secret: configs.CONSUMER_SECRET,
};

export const API = axios.create({
  baseURL: configs.BASE_URL,
  timeout: 100000,
});

export function get(Url, params) {
  return API.get(Url, {
    params: { ...authParams, ...(params && { ...params }) },
  });
}

export function post(Url, body, params) {
  return API.post(Url, body, {
    params: { ...authParams, ...(params && { ...params }) },
  });
}
export function deleteMethod(Url, body) {
  return API.delete(Url, { data: body });
}
export function put(Url, body, params) {
  return API.put(Url, body, {
    params: { ...authParams, ...(params && { ...params }) },
  });
}
