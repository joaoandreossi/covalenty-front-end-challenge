import React from "react"

import { useQuery } from "@tanstack/react-query"

import Loader from "../Loader/Loader"
import ProductCard from "../ProductCard/ProductCard"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

import * as ProductService from "../../services/ProductService"



const ProductList = () => {
    const { data, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: ProductService.getProducts })


    const renderProducts = () => {
        return data.map((product) => (
            <li>
                <ProductCard 
                    id={product.id} 
                    title={product.title} 
                    price={product.price}
                    imageUrl={product.images[0] ?? ""}
                />
            </li>
        ))
    }


    return (
        <section className={`w-full flex items-center ${(isLoading || error) ? "justify-center" : "pl-8 pr-8"}`} >
            {isLoading &&
                <Loader text="Buscando produtos..." />
            }
            {error &&
                <ErrorMessage text="Não foi possível obter a lista de produtos. Tente novamente mais tarde." />
            }
            {data &&
                <ul className="grid grid-cols-1 gap-4 min-[680px]:grid-cols-2 min-[1120px]:grid-cols-3 min-[1500px]:grid-cols-4 min-[1890px]:grid-cols-5 min-[2500px]:grid-cols-6">
                    {renderProducts()}
                </ul>
            }
        </section>
    )
}


export default ProductList
