/* eslint-disable react/prop-types */
import { Button } from '@mui/material'
import classes from './CartItem.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

function CartItem({ item }) {
	const { id, name, price, quantity } = item
	const { addItem, removeItem } = useContext(CartContext)

	return (
		<div className={classes['cart-item']}>
			<div>
				<h2 className={classes['name']}>{name}</h2>
				<div className={classes['meal']}>
					<div className={classes['price']}>${price?.toFixed(2)}</div>
					<div className={classes['quantity']}>x {quantity}</div>
				</div>
			</div>
			<div className={classes['cart-item__btns']}>
				<Button variant='outlined' size='small' onClick={() => removeItem(id)}>
					-
				</Button>
				<Button
					variant='outlined'
					size='small'
					onClick={() => addItem({ ...item, quantity: 1 })}
				>
					+
				</Button>
			</div>
		</div>
	)
}

export default CartItem
