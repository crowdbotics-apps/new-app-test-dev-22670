import axios from "axios"
import {} from "react-native-dotenv"
const connectorSneh = axios.create({
  baseURL: "https://abc.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function connector_sneh_get_details_read(payload) {
  return connectorSneh.get(`/details`, { params: { id: payload.id } })
}
export const apiService = { connector_sneh_get_details_read }
