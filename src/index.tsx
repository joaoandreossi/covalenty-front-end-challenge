import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import store from "./store/store"
import { Provider } from "react-redux"

import "./styles.css"
import App from "./components/app"


const init = () => {
    const element = document.getElementById("app")
    const root = createRoot(element)

    root.render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    )
}


init()
