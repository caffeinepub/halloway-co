import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BrandInfo {
    tagline: string;
    established: bigint;
    story: string;
}
export type Time = bigint;
export interface Collection {
    id: bigint;
    name: string;
    description: string;
    isFeatured: boolean;
    itemsCount: bigint;
    category: Category;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface Product {
    id: bigint;
    collectionId: bigint;
    name: string;
    isAvailable: boolean;
    description: string;
    price: string;
}
export enum Category {
    streetwear = "streetwear",
    collab = "collab",
    old_money = "old_money"
}
export interface backendInterface {
    addCollection(name: string, description: string, category: Category, itemsCount: bigint, isFeatured: boolean): Promise<bigint>;
    addProduct(name: string, price: string, collectionId: bigint, description: string, isAvailable: boolean): Promise<bigint>;
    getAllCollections(): Promise<Array<Collection>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllProducts(): Promise<Array<Product>>;
    getBrandInfo(): Promise<BrandInfo>;
    setBrandInfo(tagline: string, story: string, established: bigint): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
