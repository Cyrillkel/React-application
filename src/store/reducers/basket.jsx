import { createSlice } from "@reduxjs/toolkit"; //Описание редьюсера делается с помощью слайсера 

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
        count: 0,
        price: 0
    },
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload)
            state.price = state.basket.reduce(function (sum, current) {
                return sum + current.price
            }, 0)
            state.count = state.basket.length
        },
        removeProduct(state, action) {
            state.basket = state.basket.filter((item) => {
                return item.id !== action.payload
            })
            state.price = state.basket.reduce(function (sum, current) {
                return sum + current.price
            }, 0)
            state.count = state.basket.length
        }
    }
})

export const { addProduct, removeProduct } = basketSlice.actions // диструктуризация

export default basketSlice.reducer

