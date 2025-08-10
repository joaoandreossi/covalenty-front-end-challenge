import React from "react"
import { useQuery } from "@tanstack/react-query"

import * as ProductService from "../services/ProductService"


const App = () => {
    const { data, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: ProductService.getProducts })


    const renderProducts = () => {
        return data.map((product) => <p key={product.id}>{product.title}</p>)
    }


    return (
        <div>
            {isLoading &&
                <p>loading...</p>
            }
            {error &&
                <p>{error.message}</p>
            }
            {data &&
                renderProducts()
            }
        </div>
    )
}

export default App
