import React, { useEffect } from "react"

import { Route, Routes, useNavigate } from "react-router"

import { selectProduct, deselectProduct } from "../store/reducers/productReducer"
import { useProductSelector, useProductDispatch } from "../store/hooks"

import Header from "./Header/Header"
import Product from "../interfaces/Product"
import ProductList from "./ProductList/ProductList"
import ProductDetails from "./ProductDetails/ProductDetails"
import LastSelectedProduct from "./LastSelectedProduct/LastSelectedProduct"


const App = () => {
    const navigate = useNavigate()
    const dispatchAction = useProductDispatch()

    const productHistory = useProductSelector((state) => state.history)
    const currentProduct = useProductSelector((state) => state.currentProduct)


    const handleHistory = () => {
        dispatchAction(selectProduct(productHistory[productHistory.length - 1]))

        navigate(`/product/${productHistory[productHistory.length - 1].id}`)
    }

    const handleProductSelection = (product: Product) => {
        dispatchAction(selectProduct(product))

        navigate(`/product/${product.id}`)
    }

    const handleDetailsBack = () => {
        dispatchAction(deselectProduct())

        navigate("/")
    }

    
    return (
        <div className="flex flex-col h-screen relative">
            <Header className="p-4 pl-8" text="Lista de produtos" />
            {(!currentProduct && productHistory.length > 0) &&
                <LastSelectedProduct 
                    className="flex flex-col pb-4 pl-8" 
                    title={productHistory[productHistory.length - 1].title} 
                    onClick={handleHistory} 
                />
            }
            <main className="flex grow">
                <Routes>
                    <Route path="/" element={<ProductList onProductSelect={handleProductSelection} />} />
                    <Route path="/product/*" element={<ProductDetails product={currentProduct} onBack={handleDetailsBack} />} />
                </Routes>
            </main>
        </div>
    )
}


export default App
