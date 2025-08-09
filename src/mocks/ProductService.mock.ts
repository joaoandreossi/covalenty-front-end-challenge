import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"

import Product from "../interfaces/Product"
import { API_BASE_URL } from "../services/ProductService"


export const ERROR_RESPONSE = { error: "EntityNotFoundError" }

export const PRODUCT_LIST: Array<Product> = [
    {
        id: 1,
        title: "MOCK_A",
        slug: "MOCK_A",
        price: 10,
        description: "MOCK_A",
        category: {
            id: 1,
            name: "CATEGORY_MOCK_A",
            slug: "CATEGORY_MOCK_A",
            image: ""
        },
        images: []
    },
    {
        id: 2,
        title: "MOCK_B",
        slug: "MOCK_B",
        price: 10,
        description: "MOCK_B",
        category: {
            id: 1,
            name: "CATEGORY_MOCK_A",
            slug: "CATEGORY_MOCK_A",
            image: ""
        },
        images: []
    }
]


export const handlers = [
    http.get(API_BASE_URL, ({ request }) => {
        return HttpResponse.json(PRODUCT_LIST)
    }),

    http.get(API_BASE_URL + "/*", ({ request }) => {
        const id = Number(request.url.split("/").pop())

        if(!isNaN(id)){
            for(const product of PRODUCT_LIST){
                if(product.id === id){
                    return HttpResponse.json(product)
                }
            }
        }

        return HttpResponse.json(ERROR_RESPONSE)
    })
]

export const mockServer = setupServer(...handlers)
