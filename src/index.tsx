import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import store from "./store/store"
import { Provider } from "react-redux"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "./styles.css"
import App from "./components/app"


const queryClient = new QueryClient()

const init = () => {
    const element = document.getElementById("app")
    const root = createRoot(element)

    root.render(
        <StrictMode>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </Provider>
        </StrictMode>
    )
}


init()
