import React from "react"

import { selectProduct, deselectProduct } from "../store/reducers/productReducer"
import { useProductSelector, useProductDispatch } from "../store/hooks"

import Header from "./Header/Header"
import ProductList from "./ProductList/ProductList"
import ProductDetails from "./ProductDetails/ProductDetails"
import LastSelectedProduct from "./LastSelectedProduct/LastSelectedProduct"


const App = () => {
    const dispatchAction = useProductDispatch()

    const productHistory = useProductSelector((state) => state.history)
    const currentProduct = useProductSelector((state) => state.currentProduct)


    return (
        <div className="flex flex-col h-screen relative">
            <Header className="p-4 pl-8" text="Lista de produtos" />
            {(!currentProduct && productHistory.length > 0) &&
                <LastSelectedProduct 
                    className="flex flex-col pb-4 pl-8" 
                    title={productHistory[productHistory.length - 1].title} 
                    onClick={() => dispatchAction(selectProduct(productHistory[productHistory.length - 1]))} 
                />
            }
            <main className="flex grow">
                {!currentProduct &&
                    <ProductList onProductSelect={(product) => dispatchAction(selectProduct(product))} />
                }
                {currentProduct &&
                    <ProductDetails product={currentProduct} onBack={() => dispatchAction(deselectProduct())} />
                }
            </main>
        </div>
    )
}


export default App
