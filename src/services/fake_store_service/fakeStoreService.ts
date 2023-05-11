import { Product } from "@/interfaces/Product"
import axios from "axios"

export const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response.data)
    return response.data as Product[]
  } catch (error) {
    console.log(error)
  }
}