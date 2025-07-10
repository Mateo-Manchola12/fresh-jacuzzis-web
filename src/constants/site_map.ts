import { DOMAIN_NAME } from "@constants/static_paths"
import type { Page } from "@types/pageTypes"

const RAW_SITE_MAP: Page[] = [
    {
        name: "Inicio",
        slug: "",
        description: "La pagina de inicio",
    },
    {
        name: "Productos",
        slug: "productos",
        description: "Nuestros productos",
        subpages: [
            {
                name: "Nuestros Jacuzzis",
                slug: "jacuzzis",
                description: "Nuestra sección de jacuzzis",
            },
            {
                name: "Para el hogar",
                slug: "hogar",
                description: "Nuestra selección de productos para el hogar",
            },
        ],
    },
    {
        name: "Nosotros",
        slug: "nosotros",
        description: "Mas sobre nosotros",
    },
    {
        name: "Contáctanos",
        slug: "contacto",
        description: "Nuestra información de contacto",
    },
]

const buildPaths = (sites: Page[], basePath: string = DOMAIN_NAME): Page[] => {
    return sites.map((page) => {
        const fullPath = `${basePath}/${page.slug}`

        if ("subpages" in page)
            return {
                ...page,
                path: fullPath,
                clickable: false,
                subpages: buildPaths(page.subpages, fullPath),
            }

        return {
            ...page,
            path: fullPath,
            clickable: true,
        }
    })
}

export const SITE_MAP = buildPaths(RAW_SITE_MAP)
