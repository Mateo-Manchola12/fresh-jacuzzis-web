import { DOMAIN_NAME } from "@constants/static_paths"
import type { Page } from "@types/pageTypes"

const RAW_SITE_MAP: Page[] = [
    {
        name: "Inicio",
        slug: "",
        description: "La pagina de inicio",
        clickable: true,
    },
    {
        name: "Productos",
        slug: "productos",
        description: "Nuestros productos",
        clickable: false,
        subpages: [
            {
                name: "Jacuzzis",
                slug: "jacuzzis",
                description: "La pagina de inicio",
                clickable: true,
            },
            {
                name: "Hogar",
                slug: "hogar",
                description: "La pagina de inicio",
                clickable: true,
            },
        ],
    },
    {
        name: "Nosotros",
        slug: "nosotros",
        description: "Mas sobre nosotros",
        clickable: true,
    },
    {
        name: "Contáctanos",
        slug: "contacto",
        description: "Nuestra información de contacto",
        clickable: true,
    },
]

const buildPaths = (sites: Page[], basePath: string = DOMAIN_NAME): Page[] => {
    return sites.map((page) => {
        const fullPath = `${basePath}/${page.slug}`

        if ("subpages" in page)
            return {
                ...page,
                path: fullPath,
                subpages: buildPaths(page.subpages, fullPath),
            }

        return {
            ...page,
            path: fullPath,
            clickable: true,
        }
    })
}

export const SITE_MAP = buildPaths(RAW_SITE_MAP);
