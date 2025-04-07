export interface Specs {
    title: string
    id: string
    list: readonly string[]
}
export interface Product {
    id: string
    name: string
    capacity: number
    height: number
    diameter?: number
    width?: number
    depth?: number
    specs?: readonly Specs[]
    availability: boolean
    visibility: boolean
    category?: string
}
export interface Category {
    category: string
    title: string
    description: string
    products: readonly Product[]
}
