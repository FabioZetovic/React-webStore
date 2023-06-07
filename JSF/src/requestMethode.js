import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzU4ZTUyYjMyZGFkZjk3MDU0ZDE3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzM5NTkyMiwiZXhwIjoxNjg0MDAwNzIyfQ.F4g99pKU0M_OLxUdv4nLoE2ImssYFg5g0kW_FX-ivkw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});