import React, { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"

import Loader from "../Loader/Loader"
import ProductCard from "../ProductCard/ProductCard"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

import Product from "../../interfaces/Product"
import * as ProductService from "../../services/ProductService"


interface ProductListProps {
    onProductSelect: (product: Product) => void
}

const ProductList = (props: ProductListProps) => {
    const [selectedProductId, setSelectedProductId] = useState<number|null>(null)

    const productsQuery = useQuery({ queryKey: ["products"], queryFn: ProductService.getProducts })
    const productByIdQuery = useQuery({ queryKey: ["productById", selectedProductId], queryFn: () =>  ProductService.getProductById(selectedProductId), enabled: !!selectedProductId })


    useEffect(() => {
        if(productByIdQuery.data){
            props.onProductSelect(productByIdQuery.data)
        }
    }, [productByIdQuery.data])


    const renderProducts = () => {
        return productsQuery.data.map((product) => (
            <li key={product.id}>
                <ProductCard 
                    id={product.id} 
                    title={product.title} 
                    price={product.price}
                    imageUrl={product.images[0] ?? null}
                    loading={selectedProductId === product.id && productByIdQuery.isLoading}
                    onClick={() => setSelectedProductId(product.id)}
                />
            </li>
        ))
    }


    return (
        <section className={`w-full flex items-center ${(productsQuery.isLoading || productsQuery.error) ? "justify-center" : "p-8 pt-0"}`} >
            {productsQuery.isLoading &&
                <Loader text="Buscando produtos..." />
            }
            {productsQuery.error &&
                <ErrorMessage text="Não foi possível obter a lista de produtos. Tente novamente mais tarde." />
            }
            {productsQuery.data &&
                <ul className="grid grid-cols-1 gap-4 min-[680px]:grid-cols-2 min-[1120px]:grid-cols-3 min-[1500px]:grid-cols-4 min-[1890px]:grid-cols-5 min-[2500px]:grid-cols-6">
                    {renderProducts()}
                </ul>
            }
        </section>
    )
}


export default ProductList
