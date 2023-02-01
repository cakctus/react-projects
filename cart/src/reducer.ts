
import React from 'react'
import CartItem from './components/Cart/CartItem';

interface StateInterface {
    loading?: boolean;
    cart?: {
        id: number;
        title: string;
        price: number;
        img: string;
        amount: number;
    }[];
    total?: number;
    amount?: number;
}

interface ActionInterface {
    type?: string,
    payload?: number
}

const reducer = (state: StateInterface, action: ActionInterface) => {

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === "REMOVE") {
        const newCart = state.cart?.filter((item) => item.id !== action.payload)
        return {
            ...state,
            cart: newCart
        }
    }

    if (action.type === "INCREASE") {
        let amountItem = state.cart?.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
            }
            return item

        })


        return {
            ...state,
            cart: amountItem,
            // total: totals
        }
    }

    // if (action.type === "DECREASE") {
    //     let amount = state.cart?.map((item) => {
    //         if (item.id === action.payload) {
    //             if (item.amount === 1) {
    //                 return { ...item, amount: 1 }
    //             } else return { ...item, amount: item.amount - 1, }
    //         }
    //         return item
    //     })

    //     return {
    //         ...state,
    //         cart: amount,
    //     }
    // }

    if (action.type === "DECREASE") {
        let amount = state.cart?.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount - 1, }
            }
            return item
        }).filter((item) => item.amount !== 0)

        return {
            ...state,
            cart: amount,
        }
    }

    if (action.type === "GET_TOTALS") {
        let a = state.cart?.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const totalItems = price * amount

                cartTotal.price += totalItems
                cartTotal.amount += amount
                return cartTotal
            },
            {
                amount: 0,
                price: 0
            }
        )



        return {
            ...state,
            amount: a?.amount,
            total: a?.price
        }
    }

    return state
}

export default reducer