import { http, HttpResponse } from "msw"
import { mockServer, PRODUCT_LIST, ERROR_RESPONSE } from "../mocks/ProductService.mock"

import * as ProductService from "./ProductService"


beforeAll(() => mockServer.listen())

afterEach(() => mockServer.resetHandlers())

afterAll(() => mockServer.close())


describe("ProductService", () => {
    test("returns product list", async () => {
        const products = await ProductService.getProducts()

        expect(products).toEqual(PRODUCT_LIST)
    })

    test("return product by id", async () => {
        const product = await ProductService.getProductById(1)

        expect(product).toEqual(PRODUCT_LIST[0])
    })

    test("return error if not found", async () => {
        let product = await ProductService.getProductById(3)

        expect(product).toEqual(ERROR_RESPONSE)

        product = await ProductService.getProductById(undefined)

        expect(product).toEqual(ERROR_RESPONSE)
    })

    test("handles network error", async () => {
        mockServer.use(
            http.get(ProductService.API_BASE_URL, ({ request }) => {
                return HttpResponse.error()
            }),
            http.get(ProductService.API_BASE_URL + "/*", ({ request }) => {
                return HttpResponse.error()
            }),
        )

        await expect(ProductService.getProducts()).rejects.toThrow()
        await expect(ProductService.getProductById(1)).rejects.toThrow()
    })
})
