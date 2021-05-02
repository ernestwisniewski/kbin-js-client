export interface Entry {
    '@id': string;
    '@type': string;
    id: number;
    title: string;
    url?: string;
    body?: string;
    comments: number;
    uv: number;
    dv: number;
    type: string;
}
