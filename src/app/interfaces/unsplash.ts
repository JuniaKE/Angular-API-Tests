export interface Unsplash {
    total : number;
    total_pages: number;
    results: IntPictures[] 
}
export interface IntPictures {
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    },
}