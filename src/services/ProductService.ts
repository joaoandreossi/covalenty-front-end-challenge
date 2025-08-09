import axios from "axios"

import Product from "../interfaces/Product"


export const API_BASE_URL = "https://api.escuelajs.co/api/v1/products"


export const getProducts = () => {
    return new Promise<Array<Product>>((resolve, reject) => {
        axios.get(API_BASE_URL).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const getProductById = (id: number) => {
    return new Promise<Product>((resolve, reject) => {
        axios.get(API_BASE_URL + "/" + id).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}
