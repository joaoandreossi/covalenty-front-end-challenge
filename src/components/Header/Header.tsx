import React from "react"


interface HeaderProps {
    className?: string
    text: string
}

const Header = (props: HeaderProps) => {
    return (
        <header className={props.className}>
            <h1 className="font-extralight text-2xl">{props.text}</h1>
        </header>
    )
}


export default Header
