import Category from "./Category"


interface Product {
    id: number
    title: string
    slug: string
    price: number
    description: string
    category: Category
    images: Array<string>
}

export default Product
