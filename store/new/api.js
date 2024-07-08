import axios from "axios"
import {
  CONNECTOR_NEW_89_PASSWORD,
  CONNECTOR_NEW_89_USERNAME
} from "react-native-dotenv"
const new = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: CONNECTOR_NEW_89_PASSWORD,
    password: CONNECTOR_NEW_89_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
