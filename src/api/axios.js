import axios from "axios";

const instance = axios.create({
  baseURL: "https://tame-hen-baseball-cap.cyclic.app",
  headers: {'Content-Type': 'application/json'},
  timeout: 10000
})

export { instance };