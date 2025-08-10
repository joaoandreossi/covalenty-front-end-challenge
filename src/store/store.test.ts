import store from "./store"

import Product from "../interfaces/Product"
import { deselectProduct, selectProduct } from "./reducers/productReducer"


describe("product store", () => {
    const TEST_PRODUCT: Product = {
        id: 0,
        title: "test_product",
        slug: "test_product",
        price: 0,
        description: "test_product",
        category: undefined,
        images: []
    }

    
    test("has correct default state", () => {
        const state = store.getState()

        expect(state.currentProduct).toBe(null)
    })

    test("correctly select product", () => {
        store.dispatch(selectProduct(TEST_PRODUCT))

        const state = store.getState()

        expect(state.currentProduct).toEqual(TEST_PRODUCT)
    })

    test("correctly deselects product", () => {
        store.dispatch(deselectProduct())

        const state = store.getState()

        expect(state.currentProduct).toEqual(null)
    })

    test("keeps product history", () => {
        const state = store.getState()

        expect(state.history.length).toBeGreaterThan(0)
        expect(state.history[0]).toEqual(TEST_PRODUCT)
    })
})
