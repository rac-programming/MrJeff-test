import axios from "axios"
import Constants from "./Constants"

const baseDomain = "https://ecommerce.v1.backend.pre.mrjeffapp.net";
const token = Constants.token;

export default axios.create({
    baseURL: baseDomain,
    headers: {"Authorization":`Bearer ${token}`} 
});