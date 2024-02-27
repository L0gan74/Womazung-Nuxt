export interface ItemsCard {
    id: number
    name: string
    price: string
    img: string
}

export interface ItemIdCard {
    id: number
    name: string
    price: string
    oldPrice?: string
    img: string
}

export interface Category {
    id: number
    name: string
    categories: string
}