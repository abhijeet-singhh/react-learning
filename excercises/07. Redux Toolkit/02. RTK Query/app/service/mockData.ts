import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the type for the product data
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    // Add other fields as needed
}

// Define the type for the API response
interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

// Define the type for adding a new product
interface NewProduct {
    title: string;
    description: string;
    price: number;
    // Add other fields as needed
}

// Create the API slice
export const productsApi = createApi({
    reducerPath: 'products', // Unique key for the API slice
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        // Get all products (Reading)
        getAllProducts: builder.query<ProductsResponse, void>({
            query: () => '/products', // Endpoint to fetch all products
        }),
        // Get product by ID
        getProductsByID: builder.query<Product, number>({
            query: (id) => `/products/${id}`, // Endpoint to fetch a product by ID
        }),
        // Add a new product
        addNewProduct: builder.mutation<Product, NewProduct>({
            query: (newProduct) => ({
                url: '/products/add', // Endpoint to add a new product
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: newProduct,
            }),
        }),
    }),
});

// Export hooks for usage in functional components
export const {
    useGetAllProductsQuery,
    useGetProductsByIDQuery,
    useAddNewProductMutation,
} = productsApi;

// Export the reducer for integration into the Redux store
export const productsReducer = productsApi.reducer;







