import React from "react"

import Product from "../../interfaces/Product"


interface ProductDetailsProps {
    product: Product
    onBack: () => void
}

const ProductDetails = (props: ProductDetailsProps) => {
    return (
        <div className="relative grid grid-cols-1 w-full min-[990px]:grid-cols-3 gap-4 p-4 pl-8">
            <section className="flex flex-col gap-4 items-start">
                <button className="font-semibold cursor-pointer hover:text-gray-600" onClick={props.onBack}>{"< voltar"}</button>
                <div>
                    <h1 className="text-lg font-extralight">{props.product.title}</h1>
                    <span className="text-sm font-extralight">Categoria: {props.product.category.name}</span>
                </div>
                <p>{props.product.description}</p>
                <p>{`$${props.product.price}`}</p>
            </section>
            <section className="grid grid-cols-1 grid-rows-2 min-[680px]:grid-cols-2 col-span-2 gap-4 min-[990px]:max-h-[calc(100vh-8rem)]">
                <img className="col-span-1 row-span-2 w-full h-full object-cover" src={props.product.images[0] ?? null} />
                <img className="w-full h-full object-cover" src={props.product.images[1] ?? null} />
                <img className="w-full h-full object-cover" src={props.product.images[2] ?? null} />
            </section>
        </div>
    )
}


export default ProductDetails
