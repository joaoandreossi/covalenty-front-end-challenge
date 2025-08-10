import Product from "../../interfaces/Product"
import productReducer, { DEFAULT_STATE, selectProduct, deselectProduct } from "./productReducer"


describe("productReducer", () => {
    const TEST_PRODUCT: Product = {
        id: 0,
        title: "test_product",
        slug: "test_product",
        price: 0,
        description: "test_product",
        category: undefined,
        images: []
    }


    test("have correct default state", () => {
        const state = productReducer(DEFAULT_STATE, { type: undefined })

        expect(state).toEqual(DEFAULT_STATE)
    })

    test("correctly select product", () => {
        const state = productReducer(DEFAULT_STATE, selectProduct(TEST_PRODUCT))

        expect(state.currentProduct).toEqual(TEST_PRODUCT)
    })

    test("correctly deselect product", () => {
        let state = productReducer(DEFAULT_STATE, selectProduct(TEST_PRODUCT))
        state = productReducer(state, deselectProduct())

        expect(state.currentProduct).toEqual(null)
    })

    test("updates product history", () => {
        let state = productReducer(DEFAULT_STATE, selectProduct(TEST_PRODUCT))
        state = productReducer(state, deselectProduct())

        expect(state.history.length).toBeGreaterThan(0)
        expect(state.history[0]).toEqual(TEST_PRODUCT)
    })
})
