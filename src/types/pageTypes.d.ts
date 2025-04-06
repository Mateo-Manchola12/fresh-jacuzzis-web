type SinglePage = {
    name: string;
    path?: string;
    slug: string;
    clickable: boolean;
    description: string;
};

type ParentPage = {
    name: string;
    path?: string;
    slug: string;
    description: string;
    clickable: boolean;
    subpages: SinglePage[];
};

export type Page = SinglePage | ParentPage;
