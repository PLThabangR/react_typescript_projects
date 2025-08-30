export interface Product {
    id?: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    weight: number;
    
    avalabilityStatus: string;
    category: string;
    thumbnail: string;
    images: string[];
}