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
			const existingItem = state.items.some(
				(item) => item.id === action.payload.id
			)
			let updatedItems = []
			if (existingItem) {
				updatedItems = state.items.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + action.payload.quantity }
						: item
				)
			} else {
				updatedItems = [action.payload, ...state.items]
			}

			return {
				...state,
				items: updatedItems,
				totalAmount:
					state.totalAmount + action.payload.price * action.payload.quantity,
			}
		}

		case 'REMOVE': {
			const existingItem = state.items.find(
				(item) => item.id === action.payload
			)
			if (!existingItem) return state
			const updatedItems = state.items.reduce(
				(acc, curr) =>
					curr.id === action.payload
						? curr.quantity === 1
							? acc
							: [...acc, { ...curr, quantity: curr.quantity - 1 }]
						: acc.concat(curr),
				[]
			)

			return {
				...state,
				items: updatedItems,
				totalAmount: state.totalAmount - existingItem.price,
			}
		}

		case 'RESET': {
			return {
				...state,
				items: [],
				totalAmount: 0,
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

	const reset = () => {
		dispatch({ type: 'RESET' })
	}
	const values = {
		...cartState,
		addItem,
		removeItem,
		reset
	}

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export { CartContextProvider, CartContext }
