import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        products: '',
        categories: [],
        best_buys: [],
        banner: [],
        cart: [],
        flash_sell: [],
        cart_type: 0,
        individual_buying_cart: [],
        group_buying_cart: [],
        group_joining_product: [],
        orders_in_processing: null,
    },
    reducers: {
        handleProducts: (state, action) => {
            state.products = action.payload;
        },
        handleCategories: (state, action) => {
            state.categories = action.payload;
        },
        handleBestBuys: (state, action) => {
            state.best_buys = action.payload;
        },
        handleFlashSell: (state, action) => {
            state.flash_sell = [...state.flash_sell, action.payload];
        },
        handleCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        handleCartType: (state, action) => {
            state.cart_type = action.payload;
        },
        handleIndividualBuyingCart: (state, action) => {
            state.individual_buying_cart = [...state.individual_buying_cart, action.payload];
        },
        handleGroupBuyingCart: (state, action) => {
            state.group_buying_cart = action.payload;
        },
        handleJoiningGroup: (state, action) => {
            state.group_joining_product = [action.payload];
        },
        handleBanner: (state, action) => {
            state.banner = [action.payload];
        },
        handleOrdersInProcessing: (state, action) => {
            state.orders_in_processing = [action.payload];
        },

    },
});

export const {
    handleProducts,
    handleCategories,
    handleBestBuys,
    handleFlashSell,
    handleCart,
    handleCartType,
    handleIndividualBuyingCart,
    handleGroupBuyingCart,
    handleJoiningGroup,
    handleBanner,
    handleOrdersInProcessing
} = dataSlice.actions
export default dataSlice.reducer