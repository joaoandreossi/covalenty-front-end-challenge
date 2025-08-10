import React from "react"

import Product from "../../interfaces/Product"


interface LastSelectedProductProps {
    title: string
    className?: string
    onClick: () => void
}

const LastSelectedProduct = (props: LastSelectedProductProps) => {
    return (
        <div className={props.className}>
            <span className="text-sm">Última seleção: <a className="cursor-pointer underline text-blue-600" onClick={props.onClick}>{props.title}</a></span>
        </div>
    )
}


export default LastSelectedProduct
