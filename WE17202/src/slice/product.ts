import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();
        return data;
    }
);


export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async (id: number | String) => {
        const req = await fetch("http://localhost:30001/products/" + id);
        const data = await req.json();
        return data;
    }
);

//Remove product
export const removeProduct = createAsyncThunk(
    "product/removeProduct",
    async (id) => {
        const req = await fetch(
            "http://localhost:3001/products/" + id,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        const data = req.json();
        return data;
    }
);

//updateProduct
export const updateProduct = createAsyncThunk(
    "product/update",
    async (product) => {
        const req = await fetch("http://localhost:3001/products" + product.id, {
            method: "PUT",
            headers: {
                "Conten-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = req.json();
        return data;
    }
);

//Sử dụng createAsyncThunk để Call API và trả về dữ liệu
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (product) => {
        const res = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await res.json();
        return data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],
        item: {},
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.value = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = true;
        });

        // POST product
        builder.addCase(addProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        // action.payload là giá trị sau khi call API Thành công
        builder.addCase(addProduct.fulfilled, (state, action) => {
            const product = action.payload;
            state.value.push(product)
            state.isLoading = false;
        });
        builder.addCase(addProduct.rejected, (state, action) => {
            state.isLoading = true;
        });

        //Get id
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.item = action.payload;
            state.isLoading = false;
        });

        //update
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.value = state.value.map(item => item.id === action.payload ? action.payload : item)
            state.isLoading = false;
        });

        //removeProduct
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            state.item = action.payload;
            state.isLoading = false;
        });
    },
});

export default productSlice.reducer;
