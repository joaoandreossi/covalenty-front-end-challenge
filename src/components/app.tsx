import React from "react"

import Header from "./Header/Header"
import ProductList from "./ProductList/ProductList"


const App = () => {
    return (
        <div className="flex flex-col h-screen relative">
            <Header className="p-4 pl-8" text="Lista de produtos" />
            <main className="flex grow pb-4">
                <ProductList />
            </main>
        </div>
    )
}


export default App
