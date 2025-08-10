import React from "react"


interface LoaderProps {
    text?: string
}

const Loader = (props: LoaderProps) => (
    <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-800 border-t-transparent rounded-full animate-spin" />
        {props.text &&
            <p className="font-light text-lg">{props.text}</p>
        }
    </div>
)


export default Loader
