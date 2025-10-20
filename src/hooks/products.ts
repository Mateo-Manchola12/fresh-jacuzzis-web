import productsData from "@assets/products.json"
import type { Category } from "@t/productTypes"

// Exporta el JSON con el tipo adecuado
const categories: readonly Category[] = productsData
export default categories
