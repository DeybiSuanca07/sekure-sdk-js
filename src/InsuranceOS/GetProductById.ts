import axios from "axios";
import { Product } from "../Interfaces/Product";
import { skrKey, url } from "./Configuration";

export const GetProductById = async (id: number) : Promise<Product> => {

    const resp = await axios.get<Product>(`${ url }/Products/${ id }`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": true,
        "X-Requested-With": "XMLHttpRequest",
        "skr-key": skrKey
      }
    });
  
    return resp.data;
  }
  