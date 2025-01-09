
interface Products {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    rating: { rate: number, count: number }
    category: string,
    stock: number,
    isDiscont: boolean,
    discount?: number
}
interface CartProducts extends Products {
    totalPrice?: number,
    quantity?: number
}

