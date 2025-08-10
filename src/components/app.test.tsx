import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import * as ProductService from "../services/ProductService"

import App from "./app"


jest.spyOn(ProductService, "getProducts")


const renderWithQuery = (children: React.ReactNode) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            }
        }
    })

    return render(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

describe("App", () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    
    test("should show error message on connection error", async () => {
        const errorMessage = "test_error"

        ;(ProductService.getProducts as jest.Mock).mockRejectedValue(new Error(errorMessage))

        renderWithQuery(<App />)

        expect(await screen.findByText(errorMessage)).toBeInTheDocument()
    })

    test("should show loading message", async () => {
        ;(ProductService.getProducts as jest.Mock).mockReturnValue(new Promise(() => {}))

        renderWithQuery(<App />)

        expect(await screen.findByText("loading...")).toBeInTheDocument()
    })

    test("should display products", async () => {
        ;(ProductService.getProducts as jest.Mock).mockResolvedValue([{
            id: 0,
            title: "test_product",
            slug: "test_product",
            price: 0,
            description: "test_product",
            category: undefined,
            images: []
        }])

        renderWithQuery(<App />)

        expect(await screen.findByText("test_product")).toBeInTheDocument()
    })
})
