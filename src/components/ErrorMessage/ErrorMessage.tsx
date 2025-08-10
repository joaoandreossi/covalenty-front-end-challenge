import React from "react"


interface ErrorMessageProps {
    text: string
}

const ErrorMessage = (props: ErrorMessageProps) => {
    return (
        <p className="text-center pl-8 pr-8">{props.text}</p>
    )
}


export default ErrorMessage
