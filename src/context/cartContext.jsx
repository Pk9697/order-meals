/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const CartContext = createContext({
	items: [],
	totalAmount: 0,
})

const initialState = {
	items: [],
	totalAmount: 0,
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD': {
			return {
				...state,
				items: [action.payload, ...state.items],
				totalAmount:
					state.totalAmount + action.payload.price * action.payload.quantity,
			}
		}

		case 'REMOVE': {
            const existingItem = state.items.find((item) => item.id === action.payload)
            if(!existingItem) return state
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
				totalAmount:
					state.totalAmount - existingItem.price * existingItem.quantity,
			}
		}

		default:
			return state
	}
}

function CartContextProvider({ children }) {
	const [cartState, dispatch] = useReducer(reducer, initialState)

	const addItem = (item) => {
		dispatch({ type: 'ADD', payload: item })
	}

	const removeItem = (itemId) => {
		dispatch({ type: 'REMOVE', payload: itemId })
	}

	const values = {
		...cartState,
		addItem,
		removeItem,
	}

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export { CartContextProvider, CartContext }
