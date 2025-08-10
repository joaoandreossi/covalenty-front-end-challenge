import Product from "./Product"


interface ProductStore {
    currentProduct: Product | null
    history: Array<Product>
}


export default ProductStore
