import productsData from "@assets/products.json"
import type { Category } from "@types/productTypes"

// Exporta el JSON con el tipo adecuado
const categories: readonly Category[] = productsData
export default categories
