import React, { useState } from "react"

import Loader from "../Loader/Loader"


interface ProductCardProps {
    id: number
    title: string
    price: number
    imageUrl: string
    loading?: boolean
    onClick: () => void
}

const ProductCard = (props: ProductCardProps) => {
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)


    return (
        <article className="flex flex-col w-full h-120 max-h-120 bg-[#414852] hover:bg-[#1C1C1C] rounded-t-md rounded-b-md cursor-pointer" onClick={props.onClick}>
            <figure className="flex w-full h-100 items-center justify-center bg-gray-500 rounded-t-md">
                {isLoadingImage &&
                    <Loader />
                }
                <img 
                    className={isLoadingImage ? "hidden" : "w-full h-full object-cover rounded-t-md"}
                    src={props.imageUrl} 
                    onLoad={() => setIsLoadingImage(false)}
                />
            </figure>
            <section className="flex flex-col grow justify-center items-center">
                {props.loading &&
                    <Loader />
                }
                {!props.loading &&
                    <>
                        <p className="text-white text-center font-semibold">{props.title}</p>
                        <p className="text-white font-extralight">{`$${props.price}`}</p>
                    </>
                }
            </section>
        </article>
    )
}


export default ProductCard
