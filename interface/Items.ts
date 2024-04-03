export interface ItemsCard {
    id: number
    name: string
    price: string
    img: string
}

export interface ItemIdCard extends ItemsCard {
    oldPrice: string
    categories: string
    description: string
    sizes: string[]
    colors: string[]
}

export interface Category {
    id: number
    name: string
    categories: string
    isActive: boolean
}